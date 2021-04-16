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

@Component({
  selector: 'app-employee-notification',
  templateUrl: './employee-notification.component.html',
  styleUrls: ['./employee-notification.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EmployeeNotificationComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  message: string;
  @Output()
  OnOK: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('modal')
  modal: ModalComponent;
  constructor() {}

  ngOnInit(): void {}

  cancel(): void {
    this.modal.hideModal();
  }
  ok(): void {
    this.OnOK.emit(true);
    this.modal.hideModal();
  }

  showModal(): void {
    this.modal.showModal();
  }
}
