import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/auth/api.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   constructor(private formBuilder: FormBuilder, private Api: ApiService, private login: LoginComponent) { }

  ngOnInit(): void {
    this.initForm();
  }

  loading: boolean = false;
  public RegisterForm: FormGroup;
  validation_messages = {
    'firstName': [
      { type: 'required', message: 'A First Name is required.' },
    ],
    'lastName': [
      { type: 'required', message: 'A Last Name is required.' },
    ],
    'username': [
      { type: 'required', message: 'A User Name is required.' },
      { type: 'pattern', message: 'Please enter a longer User Name.' }
    ],
    'email': [
      { type: 'required', message: 'An email is required.' },
      { type: 'pattern', message: 'Please enter a valid email' }
    ],
    'password': [
      { type: 'required', message: 'A Password is required.' },
      { type: 'minlength', message: 'Minimum of 6 characters' },
    ]
  };
  
  initForm() {
    this.RegisterForm = this.formBuilder.group( {
      firstName: new FormControl( '', Validators.compose( [
        Validators.required ] ) ),
      lastName: new FormControl( '', Validators.compose( [
        Validators.required ] ) ),
      email: new FormControl( '', Validators.compose( [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ] ) ),
      username: new FormControl( '', Validators.compose( [
        // Validators.minLength( 4 ),
        Validators.required ] ) ),
      password: new FormControl( '', Validators.compose( [
        Validators.required,
        Validators.minLength( 6 )
      ] ) )
    } );
  }

  register( Form ) {
    this.loading = true;
    this.Api.registerUser(Form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  
  handleResponse( data ) {
    this.loading = false;
     let details = {
      username: this.RegisterForm.get( 'username' ).value,
      password: this.RegisterForm.get( 'password' ).value
    }
    this.login.login( details );
    console.log(data);
  }

  handleError( error ) {
    this.loading = false;
    console.log(error.error);
  }

}
