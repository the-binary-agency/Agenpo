import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

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
  {price: '123,000', trader: 'CX32ML', contract: 5, totalPrice: 'H423,000', viewOffer: '', negotiate: '', accept: ''},
  {price: '123,000', trader: 'CX32ML', contract:5, totalPrice: 'L423,000', viewOffer: '', negotiate: '', accept: ''},
  {price: '123,000', trader: 'CX32ML', contract: 5, totalPrice: 'B423,000', viewOffer: '', negotiate: '', accept: ''},
  {price: '123,000', trader: 'CX32ML', contract: 5, totalPrice: '423,000', viewOffer: '', negotiate: '', accept: ''},
  {price: '123,000', trader: 'CX32ML', contract: 15, totalPrice: '423,000', viewOffer: '', negotiate: '', accept: ''},
  {price: '123,000', trader: 'CX32ML', contract: 15, totalPrice: '423,000', viewOffer: '', negotiate: '', accept: ''},
  {price: '123,000', trader: 'CX32ML', contract: 15, totalPrice: '423,000', viewOffer: '', negotiate: '', accept: ''},
  {price: '123,000', trader: 'CX32ML', contract: 15, totalPrice: '423,000', viewOffer: '', negotiate: '', accept: ''},
  {price: '123,000', trader: 'CX32ML', contract: 25, totalPrice: '423,000', viewOffer: '', negotiate: '', accept: ''},
];

const TRANSACTION_HISTORY: TransactionHistory[] = [
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: '423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: 'H423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20',status: 'L423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: 'B423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: '423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: '423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: '423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: '423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: '423,000' },
  {sn: 0,transactionId: 'CX32ML/WNXV', deliveryDate: '4-02-20', status: '423,000' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  constructor() { }

  ngOnInit(): void {
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  displayedColumns: string[] = ['trader','price', 'contract', 'totalPrice', 'viewOffer', 'negotiate', 'accept'];
  dataSource = ELEMENT_DATA;
  resultsLength = ELEMENT_DATA.length

  historyColumns: string[] = ['sn','transactionId','deliveryDate', 'status'];
  historySource = TRANSACTION_HISTORY;
  historyLength = TRANSACTION_HISTORY.length

}
