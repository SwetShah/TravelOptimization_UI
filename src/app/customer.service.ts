import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private findRideUrl :string;
  
  constructor(private http: HttpClient) {
    this.findRideUrl = 'http://localhost:9080/customer/find/ride';
   }

   findRide(customer: Customer) : Observable<any>{
    return this.http.post(this.findRideUrl, customer);
   }
}
