import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventDetailService {
  private eventDetails: any[] = [
    {
      id: 1,
      name: 'YOUTH PARLIAMENT',
      description: 'Register yourself in this event to experience the power of being a member of parliament and put your debating skills to test. Topics : Juveniles should be treated as adults, Economic growth can be sacrificed for the good of environment.',
      brochureLink: 'https://www.google.co.in'
    },
    {
      id: 2,
      name: 'MODEL UNITED NATIONS',
      description: 'Register yourself in this even to give a voice to the country you want to make a difference to and see its progress. Topic: Expanding the mandate of the United Nations Charter to humanoid robots.',
      brochureLink: 'https://www.google.co.in'
    },
    {
        id: 4,
      name: 'JUST A MINUTE',
      description: 'Register yourself in this event if you think you can put down your standpoint in a minute without stammering.',
      brochureLink: 'https://www.google.co.in'
    },
    {
        id: 5,
      name: 'SPEAKING TO PERSUADE',
      description: 'Register yourself in this event if you think you can persuade the audience and sell your idea like a pro. Topic: Animal testing should be banned.',
      brochureLink: 'https://www.google.co.in'
    },
    {
        id: 6,
      name: 'SPEAKING TO INFORM',
      description: 'Register yourself in this event to prove your knowledge dissemination and clarity of thoughts. Topics: How does culture shock affect an individual?',
      brochureLink: 'https://www.google.co.in'
    },
    {
        id: 8,
      name: '1 VS 1 STYLE OF DEBATING',
      description: 'Register yourself in this event to encounter the invention of The Federation, which involves debating on every and any topic you can think of.',
      brochureLink: 'https://www.google.co.in'
    },
    {
        id: 9,
      name: 'BLOCK AND TACKLE',
      description: 'Register yourself in this event to speak for and against your standpoint. Sounds contradicting, doesn’t it? Topics: System of paid news should be banned, Torture is not justified irrespective of the situation, Diet pills should be banned, Money is the biggest workplace motivation.',
      brochureLink: 'https://www.google.co.in'
    },
    {
        id: 10,
      name: 'OPEN CATEGORY',
      description: 'Register yourself in this event if you want to prove yourself as the Best Public Speaker by conquering every event of this summit.',
      brochureLink: 'https://www.google.co.in'
    },
    {
        id: 11,
      name: 'OPEN MIC',
      description: 'Open Mic or open mike in which a performer performs on the stage in front of audience. This event is done to engage the audience. The performer is given a microphone to speak. Mostly first time performers participate in this event. Karaoke is also a type of open mic event.',
      brochureLink: 'https://www.google.co.in'
    },
    {
        id: 12,
      name: 'STORYFYING',
      description: 'As the name suggests storifying is used to create stories. Individuals who have a creative mind, good thinking abilities are better at storifying. It engages the audience and now in many parts of the world it has become a professional career.',
      brochureLink: 'https://www.google.co.in'
    },
    {
        id: 13,
      name: 'MONOLOGUE THIS!',
      description: 'Participants have the ultimate chance to be funny, entertaining and witty in this event. They will be provided with a fabricated news clip 1 hour before the event. This is not a news delivery competition! Instead, participants can be creative and also refer to popular talk show hosts like Jimmy Kimmel and Stephen Colbert in their final monologues.',
      brochureLink: 'https://www.google.co.in'
    },
    {
        id: 14,
      name: 'AIRCRASH',
      description: 'In this event, participants will first be divided into sub-groups based on the subject they like most (football, Marvel Cinematic Universe, etc..). A character or real-life person will be assigned to the respective participant. After this, the participant will have to “become” whoever they have been assigned. The last round of this event will be an emergency air crash round in which the participant (still playing the assigned role) will have to convince the judges why they deserve a parachute and save themselves.',
      brochureLink: 'https://www.google.co.in'
    }
  ];

    public getAllEvents(): Observable<any> {
        return of(this.eventDetails);
    }

    public getEventById(id: number): Observable<any> {
      let eventDetail: any;
      eventDetail = this.eventDetails.filter(event => {
        if (event.id === id) {
          return event;
        }
      });
      return of(eventDetail);
  }
}