import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NavbarComponent implements OnInit {
  isShow: boolean;

  constructor() {}

  ngOnInit(): void {}

  showModal(): void {
    this.isShow = true;
    console.log('work');
  }

  onHideModal($event: boolean): void {
    this.isShow = $event;
  }
}
