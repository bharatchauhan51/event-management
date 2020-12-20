import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { EventDetailService } from '../services/event-details.service';

declare var $: any;

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {

  eventDetails: any[] = [];

  constructor(private eventDetailsService: EventDetailService) { }

  ngOnInit() {
    this.eventDetailsService.getAllEvents().subscribe(eventDetail => {
      this.eventDetails = eventDetail;
    });
  }

  downloadBrochure() {
    window.open('/assets/brochure.pdf', '_blank');
 }

}
