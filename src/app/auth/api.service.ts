import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_SERVER = "http://api.agenpo.com"
  constructor ( private httpClient: HttpClient ) { }

  // Bank Info
  postBankInfo( bankInfo ): Observable<any>{
    return this.httpClient.post(`${this.API_SERVER}/api/Bank/save_bank_info`, bankInfo);
  }
  editBankInfo( bankInfo ): Observable<any>{
    return this.httpClient.put(`${this.API_SERVER}/api/Bank/update`, bankInfo); 
  }
  deleteBankInfo( id ): Observable<any>{
    return this.httpClient.delete(`${this.API_SERVER}/api​/Bank​/delete_bank_info​/${id}`);
  }

  // Commodity
  postCommodity( commodity ): Observable<any>{
    return this.httpClient.post(`${this.API_SERVER}/api/Commodity/save_commodity`, commodity);
  }

  // Manufacturer
  postManufacturer( manufacturer ): Observable<any>{
    return this.httpClient.post(`${this.API_SERVER}/api/ManufacturerCommodity/save_manufacturer_commodity`, manufacturer);
  }
  updateManufacturer( Profile ): Observable<any>{
    return this.httpClient.put(`${this.API_SERVER}/api/ManufacturerCommodity/update`, Profile); 
  }
  deleteManufacturer( id ): Observable<any> {
    return this.httpClient.delete( `${ this.API_SERVER }/api/ManufacturerCommodity/delete_manufacturer_commodity/${id}` );
  }

  // Profile
  postProfile( profile ): Observable<any>{
    return this.httpClient.post(`${this.API_SERVER}/api/Profile/save_profile_info`, profile);
  }
  editProfile( Profile ): Observable<any>{
    return this.httpClient.put(`${this.API_SERVER}/api/Profile/update`, Profile); 
  }
  deleteProfile( id ): Observable<any>{
    return this.httpClient.delete(`${this.API_SERVER}/api/Profile/delete_bank_info/${id}`);
  }

  // User
  authenticateUser( User ): Observable<any>{
    return this.httpClient.post(`${this.API_SERVER}/api/User/authenticate`, User);
  }
  registerUser( User ): Observable<any>{
    return this.httpClient.post(`${this.API_SERVER}/api/User/register`, User);
  }
  getUsers(): Observable<any>{
    return this.httpClient.get(`${this.API_SERVER}/api/User`);
  }
  getUser( id ): Observable<any>{
    return this.httpClient.get(`${this.API_SERVER}/api/User/${id}`);
  }
  editUser( User ): Observable<any>{
    return this.httpClient.put(`${this.API_SERVER}/api/User/${User.id}`, User); 
  }
  deleteUser( id ): Observable<any>{
    return this.httpClient.delete(`${this.API_SERVER}/api/User/${id}`);
  }

  // Weather ForeCast
  getWeatherForecast(): Observable<any>{
    return this.httpClient.get(`${this.API_SERVER}/WeatherForecast`);
  }


}
