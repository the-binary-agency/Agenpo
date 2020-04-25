import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { NavService } from 'src/app/services/nav.service';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(private sidenavService: NavService, public sidenav: SidenavComponent) { }

  ngOnInit(): void {
  }

  clickMenu() { 
    this.sidenavService.toggle();
  }

}
