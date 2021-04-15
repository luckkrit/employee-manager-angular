import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
