import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';  
import { Driver } from '../driver';
import { DriverService } from '../driver-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer = new Customer();
  driver = new Driver();
  success =false;
  failureMessage = '';

  constructor(private customerService: CustomerService, private router: Router) { 
    if(navigator){
      navigator.geolocation.getCurrentPosition(
        pos => {
          this.customer.latitude = pos.coords.latitude;
          this.customer.longitude = pos.coords.longitude;
        }
      );
    }
  }

  form = new FormGroup({  
    fullName : new FormControl('' , Validators.required)
});  

CustomerForm(CustomerInformation){
  this.customer.customerName = this.form.get('fullName').value;


 this.customerService.findRide(this.customer).subscribe(
  response => {
    let driver : Driver;

    if(response.Success){
      this.success = true;
      this.driver = response.Success;
    }
    else{
      this.success = false;
      this.failureMessage = response.Failure;
    }
  },
  error => {
    alert('Error Occured while finding your ride : Please try after some time');
  }
 );
}

  ngOnInit() {
    
  }

}
