import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { timeoutWith } from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ModalComponent implements OnInit {
  @Input()
  isShow: boolean;

  @ViewChild('modal')
  modal: ElementRef;

  subject: Subject<any> = new Subject<any>();

  clickObservable: Observable<Event>;
  clickSubscription: Subscription;

  constructor() {}

  ngOnInit(): void {}

  showModal(): void {
    this.isShow = true;
    this.subscribeClickEvent();
  }

  hideModal(): void {
    this.isShow = false;
    this.unSubscribeClickEvent();
  }

  subscribeClickEvent(): void {
    if (!this.clickSubscription) {
      // After modal has shown, wait for 500ms then subscribe click event
      this.clickSubscription = this.subject
        .pipe(timeoutWith(500, fromEvent(document, 'click')))
        .subscribe((e) => {
          const currentElement = document.elementFromPoint(
            e.clientX,
            e.clientY
          );
          if (
            currentElement &&
            currentElement.contains(this.modal.nativeElement)
          ) {
            this.hideModal();
          }
        });
    }
  }

  unSubscribeClickEvent(): void {
    if (this.clickSubscription) {
      this.clickSubscription.unsubscribe();
      this.clickSubscription = null;
    }
  }
}
