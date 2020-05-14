import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

export interface ViewOrders {
  time: string;
  orderCode: string;
  commodity: string;
  size: number;
  offer: string;
}
export interface TransactionHistory {
  sn: number,
  transactionId: string;
  deliveryDate: string;
  status: string;
}

const ELEMENT_DATA: ViewOrders[] = [
  {orderCode: 'SJFD6YAV', time: '5 mins ago', commodity: 'Maize', size: 5, offer: ''},
  {orderCode: 'SJFD6YAV', time: '5 mins ago', commodity: 'Cocoa', size: 5, offer: ''},
  {orderCode: 'SJFD6YAV', time: '5 mins ago', commodity: 'Soybeans', size: 5, offer: ''},
  {orderCode: 'SJFD6YAV', time: '5 mins ago', commodity: 'Coffee', size: 5, offer: ''},
  {orderCode: 'SJFD6YAV', time: '5 mins ago', commodity: 'Coffee', size: 5, offer: ''},
  {orderCode: 'SJFD6YAV', time: '5 mins ago', commodity: 'Soybeans', size: 5, offer: ''},
  {orderCode: 'SJFD6YAV', time: '5 mins ago', commodity: 'Maize', size: 5, offer: ''},
  {orderCode: 'SJFD6YAV', time: '5 mins ago', commodity: 'Cocoa', size: 5, offer: ''},
  {orderCode: 'SJFD6YAV', time: '5 mins ago', commodity: 'Maize', size: 5, offer: ''},
  {orderCode: 'SJFD6YAV', time: '5 mins ago', commodity: 'Cocoa', size: 5, offer: ''},
];

const TRANSACTION_HISTORY: TransactionHistory[] = [
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: '423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: '423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: '423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: '423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: '423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: '423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: '423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: '423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: '423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: '111,000' },
];


@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.css']
})
export class TraderComponent implements OnInit {
@ViewChild( 'firstpaginator', { static: true } ) paginator: MatPaginator;
  @ViewChild( 'historypaginator', { static: true } ) historypaginator: MatPaginator;
  
  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('highChartContainer', this.highchartoptions);
    this.dataSource.paginator = this.paginator;
    this.historySource.paginator = this.historypaginator;
  }
  
  detailsExpanded: boolean = false;

  toOffer: boolean = false; 
  offerSuccessfull: boolean = false; 

  public lineCharthighchart = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  displayedColumns: string[] = ['time','orderCode', 'commodity', 'size', 'offer'];
  dataSource = new MatTableDataSource( ELEMENT_DATA );
  resultsLength = ELEMENT_DATA.length

  historyColumns: string[] = [ 'sn', 'transactionId', 'deliveryDate', 'status' ];
  historySource = new MatTableDataSource( TRANSACTION_HISTORY );
  historyLength = TRANSACTION_HISTORY.length

  activeProduce: string = 'Coffee';

  calculateClasses( produce ) {
        return {
            'bg-primary': this.activeProduce == produce,
            'text-white': this.activeProduce == produce
        };
  }
  
  // HighCharts
  public highchartoptions: any = {
    chart: {
      type: 'line',
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
     categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    series: [
      {
        name: this.activeProduce,
        data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
      }
    ]
  }

  reloadChart( produce ) {
    this.highchartoptions.series[ 0 ].name = produce;
    Highcharts.chart('highChartContainer', this.highchartoptions);
  }

  offerr() {
    this.offerSuccessfull = false;
    this.toOffer = true;
    setTimeout(() => {
      var el = document.getElementById('offerCard')
      this.scroll(el);
    }, 150);
  }

  makeOffer() {
    this.cancelOffer();
    this.offerSuccessfull = true;
 }

  cancelOffer() {
    this.toOffer = false;
  }

  scroll(el: HTMLElement){
    el.scrollIntoView();
  }

}
