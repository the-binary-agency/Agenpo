import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavService } from 'src/app/services/nav.service';
import { TokenService } from 'src/app/auth/token.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild( 'sidenav' ) public sidenav: MatSidenav;

  constructor ( private sideNavService: NavService, private Token: TokenService, private Auth: AuthService, private router: Router) {
    this.changeSidenavMode();
   }

  public loggedIn: boolean;
  // public Admin = this.Auth.adminStatus;
  screenWidth: number;
  lastHome: string;

  ngOnInit(): void {
    this.Auth.authStatus.subscribe( value => this.loggedIn = value )
   }
  
  ngAfterViewInit(): void {
   this.sideNavService.sideNavToggleSubject.subscribe(()=> {
      this.sidenav.toggle();
   } );
    if ( this.screenWidth > 768 && this.loggedIn ) {
      this.sidenav.open();
    } else {
      this.sidenav.close();
    }
  }
  
  changeSidenavMode() {
    // set screenWidth on page load
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }

  logOut(event: MouseEvent){
    event.preventDefault();
    this.Token.remove();
    localStorage.removeItem( 'ClientID' );
    this.Auth.changeAuthStatus(false);
    this.Auth.changeAdminStatus(false);
    // this.Auth.changeProducerStatus(false);
    this.sidenav.close();
    this.router.navigateByUrl('/login');
  }

  ngOnDestroy() {
    this.Auth.loggedIn.unsubscribe();
  }

}
