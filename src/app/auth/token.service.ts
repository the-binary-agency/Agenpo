import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { EnvironmentService } from './environment.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login1:  '/api/auth/loginwithemail',
    // login2: this.env.backendUrl + '/api/auth/loginwithphone',
    // loginAdmin: this.env.backendUrl + '/api/auth/loginAdmin',
    // signup: this.env.backendUrl + '/api/auth/signup',
    // signupAdmin: this.env.backendUrl + '/api/auth/signupAdmin'
  }

  constructor (
    // private env: EnvironmentService
    //  public jwtHelper: JwtHelperService
  ) { }


handle(data){
  this.set( data );
}

set(token){
  localStorage.setItem('token', token)
}
  

get(){
  return localStorage.getItem('token');
}

remove(){
  localStorage.removeItem('token');
}

  isValid() {
  const helper = new JwtHelperService();
  let token = this.get();

  if ( token ) {
    return !helper.isTokenExpired( token );
  }
  //   const payload = this.payload( token )
  //   if ( payload ) { 
  //     console.log('payload is', payload);
  //     return true;
  //   //  return  Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false; 
  //   } else {
  //     return false;
  //   }
  // } else {
  //   return false;
  // }
}
  
  isAdmin(){
  const token = this.get();
  if(token){
    const payload = this.payload( token )
    if ( payload ) {
      return true;
      // return  (payload.role == 'Admin') ? true : false; 
    }
      return false;
    }
  }
  

payload(token){
  const payload = token.split('.')[1];
  return this.decode(payload);
}

decode( payload ) {
    return JSON.parse(atob(payload));
}

  loggedIn() {
  return this.isValid();
}
  
  Admin() {
    return this.isAdmin();
  }

}
