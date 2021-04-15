import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeComponent } from './employee.component';
import { AlertComponent } from './alert/alert.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    NavbarComponent,
    EmployeeListComponent,
    AlertComponent,
    ModalComponent,
  ],
  imports: [CommonModule],
  providers: [EmployeeService],
  exports: [EmployeeComponent],
})
export class EmployeeModule {}
