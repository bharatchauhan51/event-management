import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { EventDetailService } from 'src/app/services/event-details.service';
import { BreadcrumbsEnum } from './breadcrumbs.enum';

declare var $: any;

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  urls: string[];
  eventName: string;
  eventId: number; 
  eventDetail: any = {};
  currentPageTitle: any;
  breadCrumbs: any[] = [{
    title: 'Home',
    url: '/home' 
  }];

  constructor(public router: Router,
    private activatedRoute: ActivatedRoute,
    private eventDetailService: EventDetailService) { 
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let roughUrls = event.url.split('/');
        this.urls = roughUrls.splice(1,);
      }
      window.scrollTo(0,0);
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.eventId = +params['eventId'];
    });
    this.urls.forEach(url => {
      this.breadCrumbs.push({
        title: BreadcrumbsEnum[url],
        url: `/${url}`
      });
    });
    if (!this.eventId) {
      this.currentPageTitle = this.breadCrumbs[this.breadCrumbs.length - 1].title;
      this.breadCrumbs.pop();
    } else {
      this.breadCrumbs.pop();
      this.eventDetailService.getEventById(this.eventId).subscribe(eventDetail => { 
        this.eventDetail = eventDetail[0];
        this.eventName = this.eventDetail.name[0].toUpperCase() + this.eventDetail.name.slice(1).toLowerCase();
        this.currentPageTitle = this.eventName + ' Registration';
      });
    }
  }
}
