/***
 * Use template from this URL: https://www.bootdey.com/snippets/view/bs4-contact-cards#html
 */
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('search')
  search: ElementRef;

  changeSubscription: Subscription;

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

  ngAfterViewInit(): void {
    this.registerOnChange();
  }

  registerOnChange(): void {
    this.changeSubscription = fromEvent(
      this.search.nativeElement as HTMLInputElement,
      'input'
    )
      .pipe(pluck('target', 'value'), debounceTime(500), distinctUntilChanged())
      .subscribe((name: string) => this.onKeyDown(name));
  }
}
