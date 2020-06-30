import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { DriverService } from '../driver-service.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  drivers : Driver[];

  constructor(private driverService: DriverService) {
    
  }

  ngOnInit() {
    this.findAllDrivers();
  }

  findAllDrivers(){
    this.driverService.findAll().subscribe(data => {
        this.drivers = data;
    });
  }

}
