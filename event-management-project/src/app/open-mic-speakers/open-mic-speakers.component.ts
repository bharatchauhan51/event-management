import { Component, OnInit } from '@angular/core';
import { EventDetailService } from '../services/event-details.service';

@Component({
  selector: 'app-open-mic-speakers',
  templateUrl: './open-mic-speakers.component.html',
  styleUrls: ['./open-mic-speakers.component.css']
})
export class OpenMicSpeakersComponent implements OnInit {

  openMicSpeakers: any[] = [];
  constructor(private eventDetailsService: EventDetailService) { }

  ngOnInit(): void {
    this.eventDetailsService.getOpenMicSpeakers().subscribe(x => { 
      this.openMicSpeakers = x;
    })
  }

  ShowDescription() {
    window.location.href = 'https://forms.gle/rTzcNKgWtxKF3Kqw7'
  }
}
