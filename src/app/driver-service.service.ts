import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from './driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private driverUrl:string;

  constructor(private http: HttpClient) { 
    this.driverUrl = 'http://localhost:9080/driver/get';
  }

  public findAll(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.driverUrl);
  }

}
