import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/auth/api.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/auth/token.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private Api: ApiService,private router: Router, private Token: TokenService, private Auth: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  loading: boolean = false;
  public LoginForm: FormGroup;
  validation_messages = {
    'phone': [
      { type: 'required', message: 'A Phone Number is required.' },
      { type: 'pattern', message: 'Please enter a valid Phone Number.' }
    ],
    'email': [
      { type: 'required', message: 'An email is required.' },
      { type: 'pattern', message: 'Please enter a valid business email' }
    ],
    'password': [
      { type: 'required', message: 'A Password is required.' },
      { type: 'minlength', message: 'Minimum of 6 characters' },
    ]
  };
  
  initForm() {
    this.LoginForm = this.formBuilder.group( {
      username: new FormControl( '', Validators.compose( [
        Validators.minLength( 4 ),
        Validators.required ] ) ),
      password: new FormControl( '', Validators.compose( [
        Validators.required,
        Validators.minLength( 6 )
      ] ) )
    } );
  }

  login(Form){
    this.loading = true;
    this.Api.authenticateUser(Form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  
  handleResponse( data ) {
    this.loading = false;
    this.Token.set( data.token );
    this.Auth.encryptID( data.id );
    this.router.navigateByUrl( '/home' );
    console.log(data);
  }

  handleError( error ) {
    this.loading = false;
    console.log(error.error);
  }
  
}
