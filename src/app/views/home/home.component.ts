import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as Highcharts from 'highcharts';
import { ApiService } from 'src/app/auth/api.service';
import { TokenService } from 'src/app/auth/token.service';
import { AuthService } from 'src/app/auth/auth.service';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

export interface PendingOffers {
  trader: string;
  price: string;
  contract: number;
  totalPrice: string;
  viewOffer: string;
  negotiate: string;
  accept: string;
}
export interface TransactionHistory {
  sn: number,
  transactionId: string;
  deliveryDate: string;
  status: string;
}

const ELEMENT_DATA: PendingOffers[] = [
  {price: '123,000', trader: 'CX32ML', contract: 5, totalPrice: '423,000', viewOffer: '', negotiate: '', accept: ''},
  {price: '123,000', trader: 'CX32ML', contract: 5, totalPrice: '423,000', viewOffer: '', negotiate: '', accept: ''},
  {price: '123,000', trader: 'CX32ML', contract:5, totalPrice: '423,000', viewOffer: '', negotiate: '', accept: ''},
  {price: '123,000', trader: 'CX32ML', contract: 5, totalPrice: '423,000', viewOffer: '', negotiate: '', accept: ''},
  {price: '123,000', trader: 'CX32ML', contract: 5, totalPrice: '423,000', viewOffer: '', negotiate: '', accept: ''},
  {price: '123,000', trader: 'CX32ML', contract: 15, totalPrice: '423,000', viewOffer: '', negotiate: '', accept: ''},
  {price: '123,000', trader: 'CX32ML', contract: 15, totalPrice: '423,000', viewOffer: '', negotiate: '', accept: ''},
  {price: '123,000', trader: 'CX32ML', contract: 15, totalPrice: '423,000', viewOffer: '', negotiate: '', accept: ''},
  {price: '123,000', trader: 'CX32ML', contract: 15, totalPrice: '423,000', viewOffer: '', negotiate: '', accept: ''},
  {price: '123,000', trader: 'CX32ML', contract: 25, totalPrice: '423,000', viewOffer: '', negotiate: '', accept: ''},
];

const TRANSACTION_HISTORY: TransactionHistory[] = [
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: 'completed' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: 'completed' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: 'completed' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: 'completed' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: 'completed' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: 'completed' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: 'completed' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: 'completed' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: 'completed' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: 'completed' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('bidEdit') bidEdit: ElementRef;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild( 'firstpaginator', { static: true } ) paginator: MatPaginator;
  @ViewChild( 'historypaginator', { static: true } ) historypaginator: MatPaginator;
  
  constructor(private api :ApiService, private token : TokenService,private Auth: AuthService) { }

  ngOnInit(): void {
    Highcharts.chart('highChartContainer', this.highchartoptions);
    this.dataSource.paginator = this.paginator;
    this.historySource.paginator = this.historypaginator;
    console.log('authstatus is ', this.Auth.loggedIn);
    this.api.getUser(3).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }
  
  detailsExpanded: boolean = false;

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

  displayedColumns: string[] = ['trader','price', 'contract', 'totalPrice', 'viewOffer', 'negotiate', 'accept'];
  dataSource = new MatTableDataSource( ELEMENT_DATA );
  resultsLength = ELEMENT_DATA.length

  historyColumns: string[] = [ 'sn', 'transactionId', 'deliveryDate', 'status' ];
  historySource = new MatTableDataSource( TRANSACTION_HISTORY );
  historyLength = TRANSACTION_HISTORY.length

  tobid: number;

  bid( i ) {
    this.tobid = i;
    setTimeout(() => {
    this.bidEdit.nativeElement.focus();
    }, 150);
  }

  edit( i ) {
    if ( this.tobid == i ) {
      return true;
    } else {
      return false;
    }
  }

  cancelBid() {
    this.tobid = null;
  }

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

}
