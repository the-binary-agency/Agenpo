import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/auth/api.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor ( private formBuilder: FormBuilder, private api: ApiService, private Auth: AuthService ) { }
  
  User: any = {};
  Bank: any = {};
  profileloading: boolean = false;
  public UpdateForm: FormGroup;
  public BankForm: FormGroup;

  ngOnInit(){
    this.initForms();
    this.api.getUsers().subscribe(
      data => console.log('users are ', data)
      
    )
    this.getUser();
  }

  async getUser() {
    this.profileloading = true;
    const user = await this.api.getUser( this.Auth.decryptID() ).toPromise();
    this.User = user;  
    this.profileloading = false;
  }
  
  handleResponse( data ) {
    this.profileloading = false;
    // this.loading = false;
    this.User = data;
    console.log(data);
  }

  handleError( error ) {
    this.profileloading = false;
    // this.loading = false;
    console.log(error);
  }

  initForms() {
    this.initProfileForm();
    this.initBankForm();
  }

  updateProfile(Form){
    // this.profileloading = true;
    this.api.editProfile(Form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  updateBank( Form ) {
    this.api.postBankInfo( Form ).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  
  initProfileForm() {
    this.UpdateForm = this.formBuilder.group( {
      userId: new FormControl( this.Auth.decryptID()  ),
      clientId: new FormControl( ''),
      state: new FormControl( ''),
      country: new FormControl( ''),
      postalCode: new FormControl( ''),
      phonenumber: new FormControl( ''),
      address: new FormControl( ''),
      factoryLocations: new FormControl( ''),
      status: new FormControl( 0 ),
      picture: new FormControl( ''),
    } );
  }

  initBankForm() {
    this.BankForm = this.formBuilder.group( {
      userId: new FormControl( this.Auth.decryptID() ),
      bankName: new FormControl( '', Validators.compose( [
        Validators.required,
      ] ) ),
      accountName: new FormControl( '', Validators.compose( [
        Validators.required,
      ] ) ),
      accountNumber: new FormControl( '', Validators.compose( [
        Validators.required,
      ] ) ),
    } );
  }

}
