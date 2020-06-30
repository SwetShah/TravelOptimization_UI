import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { DriverComponent } from './driver/driver.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { DriverService } from './driver-service.service';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from './customer.service';

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {
          path:"localhost:4200",
          component:AppComponent
        }
      ]
    )
  ],
  providers: [DriverService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
