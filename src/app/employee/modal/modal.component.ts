import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { from, fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { timeout, timeoutWith } from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ModalComponent implements OnInit, OnChanges {
  @Input()
  isShow: boolean;

  @Output()
  OnHide: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('modal')
  modal: ElementRef;

  subject: Subject<any> = new Subject<any>();

  clickObservable: Observable<Event>;
  clickSubscription: Subscription;

  constructor() {}

  ngOnInit(): void {}

  hideModal(): void {
    this.isShow = false;
    this.OnHide.emit(this.isShow);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isShow.currentValue) {
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
    } else {
      if (this.clickSubscription) {
        this.clickSubscription.unsubscribe();
        this.clickSubscription = null;
      }
    }
  }
}
