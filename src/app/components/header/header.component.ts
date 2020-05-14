import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { NavService } from 'src/app/services/nav.service';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor ( private sidenavService: NavService, public sidenav: SidenavComponent, public router: Router ) { 
    router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        this.url = e.url;
      }
    });
  }

  url: string;

  ngOnInit(): void {
  }

  clickMenu() { 
    this.sidenavService.toggle();
  }
  

}
