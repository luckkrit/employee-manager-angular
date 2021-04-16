import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EmployeeFormComponent implements OnInit {
  @Input()
  title: string;
  @ViewChild('modal')
  modal: ModalComponent;

  employee: Employee;
  @Output()
  OnEditEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output()
  OnAddEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();

  employeeForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    jobTitle: ['', Validators.required],
    phone: ['', Validators.required],
    imageUrl: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  setEmployee(employee: Employee): void {
    this.employee = employee;
    this.employeeForm.patchValue(this.employee);
    this.showModal();
  }

  showModal(): void {
    this.modal.showModal();
  }

  saveEmployee(): void {
    if (this.employee) {
      this.employee = { ...this.employee, ...this.employeeForm.value };
      this.OnEditEmployee.emit({ ...this.employee });
    } else {
      this.employee = this.employeeForm.value;
      this.OnAddEmployee.emit({ ...this.employee });
    }
    this.employeeForm.reset();
    this.employee = null;
    this.modal.hideModal();
  }
}
