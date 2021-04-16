import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NavbarComponent implements OnInit {
  // @ViewChild('modal')
  // @Input()
  // employeeFormComponent: EmployeeFormComponent;

  @Output()
  OnAddEmployee: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  showModal(): void {
    // this.employeeFormComponent.showModal();
    this.OnAddEmployee.emit(true);
  }
}
