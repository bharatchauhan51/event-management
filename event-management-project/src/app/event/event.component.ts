import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';

declare var $: any;		

@Component({
  selector: 'app-events',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventsComponent {
  isScrollToTopVisible: boolean = false;

  constructor(private viewPortScroller: ViewportScroller) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) 
    doSomething(event) {
      if (window.pageYOffset > 8) {
        this.isScrollToTopVisible = true;
      } else {
        this.isScrollToTopVisible = false;
      }
    }

  scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  onClickScroll(elementId: string) {
    this.viewPortScroller.scrollToAnchor(elementId);
  }
}
