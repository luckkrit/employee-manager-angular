import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Employee } from './employee';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeService } from './employee.service';
import { EmployeeNotificationComponent } from './employee-notification/employee-notification.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  tempEmployees: Employee[] = [];
  @ViewChild('modal')
  employeeFormComponent: EmployeeFormComponent;
  @ViewChild('notification')
  employeeNotificationComponent: EmployeeNotificationComponent;
  errorMessage = '';
  constructor(private employeeService: EmployeeService) {}

  employeeId: number;

  ngOnInit(): void {
    this.getEmployees();
  }
  onAddEmployee(): void {
    this.employeeFormComponent.title = 'Add Employee';
    this.employeeFormComponent.showModal();
  }
  onEditEmployee(employee: Employee): void {
    this.employeeFormComponent.title = 'Edit Employee';
    this.employeeFormComponent.setEmployee(employee);
    this.employeeFormComponent.showModal();
  }
  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (employees) => {
        this.employees = employees;
        this.tempEmployees = employees;
      },
      (error) => (this.errorMessage = error)
    );
  }

  editEmployee(employee: Employee): void {
    this.employeeService
      .updateEmployee(employee)
      .subscribe(() => this.getEmployees());
  }

  addEmployee(employee: Employee): void {
    this.employeeService
      .addEmployee(employee)
      .subscribe(() => this.getEmployees());
  }

  onOK(): void {
    this.employeeService
      .deleteEmployee(this.employeeId)
      .subscribe(() => this.getEmployees());
    this.employeeId = 0;
  }

  onDeleteEmployee($event: number): void {
    this.employeeId = $event;
    this.employeeNotificationComponent.showModal();
  }

  searchEmployee(name: string): Employee[] {
    return this.tempEmployees.filter((employee) =>
      employee.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  onSearchEmployee($event: string): void {
    console.log($event);
    this.employees = this.searchEmployee($event);
  }
}
