import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, EmployeeModule],
  providers: [],
  bootstrap: [EmployeeComponent],
})
export class AppModule {}
