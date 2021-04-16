import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
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
  @Input()
  public employees: Employee[] = [];
  @Input()
  public errorMessage = '';
  @Output()
  OnEditEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output()
  OnDeleteEmployee: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  editEmployee(employee: Employee): void {
    this.OnEditEmployee.emit(employee);
  }

  deleteEmployee(employee: Employee): void {
    this.OnDeleteEmployee.emit(employee.id);
  }
}
