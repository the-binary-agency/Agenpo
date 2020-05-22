import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TokenService } from './token.service';
import { environment } from '../../environments/environment.prod'
import * as CryptoJS from 'crypto-js';  

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private token: TokenService,) { }

  
  public loggedIn: Subject<boolean> = new BehaviorSubject<boolean>( this.token.loggedIn() );
  public Admin: Subject<boolean> = new BehaviorSubject<boolean>( this.token.Admin() );
  // private Producer: Subject<boolean> = new BehaviorSubject<boolean>( this.token.Producer() );
  authStatus = this.loggedIn.asObservable();
  adminStatus = this.Admin.asObservable();
  // producerStatus = this.Producer.asObservable();

    changeAuthStatus(value: boolean) {
    this.loggedIn.next( value );
    }
  
  changeAdminStatus(value: boolean) {
    this.Admin.next( value );
  }

  encryptID( id ) {
    var iid = id.toString();
    let encdID = CryptoJS.AES.encrypt( iid.trim(), environment.encPassword.trim() ).toString();
    localStorage.setItem('ClientID', encdID)
  }

  decryptID() {
    let id = localStorage.getItem( 'ClientID' );
    let dcdID = CryptoJS.AES.decrypt( id.trim(), environment.encPassword.trim() ).toString(CryptoJS.enc.Utf8); 
    return parseInt(dcdID);
  }
  
  // changeProducerStatus(value: boolean) {
  //   this.Producer.next( value );
  // }

}
