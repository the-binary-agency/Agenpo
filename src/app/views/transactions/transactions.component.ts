import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  price: string,
  transactionID: string,
  noOfContracts: number,
  deliveryDate: string,
  status: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {transactionID: 'CMX/7HDJ', price: '120,000', noOfContracts: 5, deliveryDate: '4-02-20', status: 'completed'},
  {transactionID: 'CMX/7HDJ', price: '120,000', noOfContracts: 5, deliveryDate: '4-02-20', status: 'completed'},
  {transactionID: 'CMX/7HDJ', price: '120,000', noOfContracts: 5, deliveryDate: '4-02-20', status: 'completed'},
  {transactionID: 'CMX/7HDJ', price: '120,000', noOfContracts: 5, deliveryDate: '4-02-20', status: 'completed'},
  {transactionID: 'CMX/7HDJ', price: '120,000', noOfContracts: 5, deliveryDate: '4-02-20', status: 'completed'},
  {transactionID: 'CMX/7HDJ', price: '120,000', noOfContracts: 5, deliveryDate: '4-02-20', status: 'completed'},
  {transactionID: 'CMX/7HDJ', price: '120,000', noOfContracts: 5, deliveryDate: '4-02-20', status: 'completed'},
  {transactionID: 'CMX/7HDJ', price: '120,000', noOfContracts: 5, deliveryDate: '4-02-20', status: 'completed'},
  {transactionID: 'CMX/7HDJ', price: '120,000', noOfContracts: 5, deliveryDate: '4-02-20', status: 'completed'},
  {transactionID: 'CMX/7HDJ', price: '120,000', noOfContracts: 5, deliveryDate: '4-02-20', status: 'completed'},
];

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  @ViewChild( MatSort, { static: true } ) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  activeProduce: string = 'Coffee';
  displayedColumns: string[] = ['SN','transactionID', 'price', 'noOfContracts', 'deliveryDate', 'status'];
  dataSource = new MatTableDataSource( ELEMENT_DATA );
  resultsLength = ELEMENT_DATA.length

  constructor () { }
  

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  calculateClasses( produce ) {
        return {
            'btn-primary': this.activeProduce == produce,
            'text-white': this.activeProduce == produce,
            'border-custom': this.activeProduce != produce,
            'bg-white': this.activeProduce != produce,
        };
  }

}
