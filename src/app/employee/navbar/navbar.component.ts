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
  @Output()
  OnSearchEmployee: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  OnAddEmployee: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  showModal(): void {
    this.OnAddEmployee.emit(true);
  }

  onKeyDown(name: string): void {
    this.OnSearchEmployee.emit(name);
  }
}
