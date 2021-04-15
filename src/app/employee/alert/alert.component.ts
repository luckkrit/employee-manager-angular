import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AlertComponent implements OnInit {
  @Input()
  type = 'alert-danger';

  @Input()
  message: string;

  constructor() {}

  ngOnInit(): void {}
}
