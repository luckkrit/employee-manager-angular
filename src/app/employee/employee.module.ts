import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeComponent } from './employee.component';
import { AlertComponent } from './alert/alert.component';
import { ModalComponent } from './modal/modal.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeNotificationComponent } from './employee-notification/employee-notification.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    NavbarComponent,
    EmployeeListComponent,
    AlertComponent,
    ModalComponent,
    EmployeeFormComponent,
    EmployeeNotificationComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [EmployeeService],
  exports: [EmployeeComponent],
})
export class EmployeeModule {}
