import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
  @Output()
  clickOutside: EventEmitter<Event> = new EventEmitter<Event>();

  @HostListener('document:click', ['$event'])
  onClick(event): void {
    console.log('hide2');
    if (!this.elemRef.nativeElement.contains(event.target)) {
      // Cliecked Outside
      this.clickOutside.emit(event);
    }
  }

  constructor(private elemRef: ElementRef) {
    console.log(elemRef);
  }
}
