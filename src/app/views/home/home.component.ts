import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('bidEdit') bidEdit: ElementRef;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild( 'firstpaginator', { static: true } ) paginator: MatPaginator;
  @ViewChild( 'historypaginator', { static: true } ) historypaginator: MatPaginator;
  
  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.historySource.paginator = this.historypaginator;
  }
  detailsExpanded: boolean = false;

  public lineChartOptions = {
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

}
