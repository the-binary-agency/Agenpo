import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

export interface PendingOffers {
  time: string;
  commodity: string;
  transactionID: string;
  size: number;
  bidPrice: string;
  action: string;
}

const ELEMENT_DATA: PendingOffers[] = [
  {commodity: 'Cocoa', time: 'CX32ML', transactionID:'0345nsd/ssd', size: 5, bidPrice: '4883', action: 'buy'},
  {commodity: 'Cocoa', time: 'CX32ML', transactionID:'0345nsd/ssd', size: 5, bidPrice: '4883', action: 'buy'},
  {commodity: 'Cocoa', time: 'CX32ML', transactionID:'0345nsd/ssd', size: 5, bidPrice: '4883', action: 'buy'},
  {commodity: 'Cocoa', time: 'CX32ML', transactionID:'0345nsd/ssd', size: 5, bidPrice: '4883', action: 'trade'},
  {commodity: 'Cocoa', time: 'CX32ML', transactionID:'0345nsd/ssd', size: 5, bidPrice: '4883', action: 'buy'},
  {commodity: 'Soybeans', time: 'CX32ML', transactionID: '0345nsd/ssd', size: 5, bidPrice: '4883', action: 'trade'},
  {commodity: 'Soybeans', time: 'CX32ML', transactionID: '0345nsd/ssd', size: 5, bidPrice: '4883', action: 'buy'},
  {commodity: 'Coffee', time: 'CX32ML', transactionID: '0345nsd/ssd', size: 5, bidPrice: '4883', action: 'buy'},
  {commodity: 'Maize', time: 'CX32ML', transactionID: '0345nsd/ssd', size: 5, bidPrice: '4883', action: 'trade'},
  {commodity: 'Maize', time: 'CX32ML', transactionID: '0345nsd/ssd', size: 5, bidPrice: '4883', action: 'buy'},
];

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  @ViewChild( MatMenuTrigger ) trigger: MatMenuTrigger;
  @ViewChild( 'firstpaginator', { static: true } ) paginator: MatPaginator;
  @ViewChild('buyDialog') buyDialog: TemplateRef<any>;
  @ViewChild('tradeDialog') tradeDialog: TemplateRef<any>;


  constructor (private dialog: MatDialog, ) { }
  produceList = [
    {name: 'SoyBeans', tons: 50, image: 'soyabeans.png'},
    {name: 'Coffee', tons: 120, image: 'coffee-beans.png'},
    {name: 'Cocoa', tons: 250, image: 'frutti_cacao.png'},
    {name: 'Maize', tons: 10, image: 'maize-seeds.png'},
    {name: 'Cashew Nut', tons: 57, image: 'cashew_nuts.png'},
    {name: 'Gum Arabic', tons: 150, image: 'gum_arabic.png'},
    {name: 'Ginger', tons: 50, image: 'ginger.png'},
    {name: 'Seseme Seeds', tons: 50, image: 'sesame_seeds.png'},
    {name: 'Millet', tons: 50, image: 'millet.png'},
    {name: 'Sorghum', tons: 50, image: 'sorghum.png'},
  ]

  list = [
    { name: 'SoyBeans', number: 50 },
    { name: 'Coffee', number: 120 },
    { name: 'Cocoa', number: 250 },
    { name: 'Maize', number: 10 },
    { name: 'Cashew Nut', number: 57 },
    { name: 'Gum Arabic', number: 150 },
    { name: 'Ginger', number: 50 },
    { name: 'Seseme Seeds', number: 50 },
    { name: 'Millet', number: 50 },
    { name: 'Sorghum', number: 50 },
  ];
  buy = false;
  activeSelection: string = 'Tons';

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['time','commodity', 'transactionID', 'size', 'bidPrice', 'action'];
  dataSource = new MatTableDataSource( ELEMENT_DATA );
  resultsLength = ELEMENT_DATA.length

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  callBuyDialog() {
    let dialogRef = this.dialog.open(this.buyDialog, { width: '400px'});
    dialogRef.afterClosed().subscribe(result => {
        // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
        if (result !== undefined) {
            if (result === 'yes') {
                // TODO: Replace the following line with your code.
                console.log('User clicked yes.');
            } else if (result === 'no') {
                // TODO: Replace the following line with your code.
                console.log('User clicked no.');
            }
        }
    })
  }

  callTradeDialog() {
    let dialogRef = this.dialog.open(this.tradeDialog, { width: '400px'});
    dialogRef.afterClosed().subscribe(result => {
        // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
        if (result !== undefined) {
            if (result === 'yes') {
                // TODO: Replace the following line with your code.
                console.log('User clicked yes.');
            } else if (result === 'no') {
                // TODO: Replace the following line with your code.
                console.log('User clicked no.');
            }
        }
    })
  }

  calculateClasses( selection ) {
    return {
        'bg-primary': this.activeSelection == selection,
        'text-white': this.activeSelection == selection,
        'text-dark': this.activeSelection != selection
    };
  }


}

