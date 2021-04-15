import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EmployeeListComponent implements OnInit {
  public employees: Employee[] = [];
  public errorMessage = '';
  constructor(private employeeService: EmployeeService) {}

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (employees: Employee[]) => {
        this.employees = employees;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        this.errorMessage = error.message;
      }
    );
  }

  ngOnInit(): void {
    this.getEmployees();
  }
}
