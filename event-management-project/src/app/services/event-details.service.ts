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

  private openMicSpeakers: any[] = [
    {
      id: 1,
      name: 'Mas Mahathir',
      imageUrl: 'https://instagram.fdel21-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/133274508_1022771224872984_7132096163882027862_n.jpg?_nc_ht=instagram.fdel21-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MLOHDqu99f0AX_7OrCT&tp=1&oh=b1085c74435cceba90cb733004c65b65&oe=60231B7E',
      descriptionUrl:'https://www.instagram.com/p/CJYbd33nJIF/?igshid=1wbl0zf8kx579'
    },
    {
      id: 2,
      name: 'Thomas Chen',
      imageUrl: 'https://instagram.fdel21-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/133975065_181043007045874_8340295104877036027_n.jpg?_nc_ht=instagram.fdel21-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=n3OJF8obmrUAX_FiVmc&tp=1&oh=07bc6ffbdb87cd46693e4fb8b25b4828&oe=60237AD3',
      descriptionUrl:'https://www.instagram.com/p/CJVM4KWnBBX/?igshid=14llg4265f9l6'
    },
    {
      id: 3,
      name: 'Aryan Agarwal Jain',
      imageUrl: 'https://instagram.fdel21-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/133842741_426914735332713_5150553428853774677_n.jpg?_nc_ht=instagram.fdel21-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=cAX8LlGE6VoAX_DV_s8&tp=1&oh=3914b9869ab30f45da3c1d5f900236de&oe=60211C33',
      descriptionUrl:'https://www.instagram.com/p/CJVMhP_HGON/?igshid=vhlj99ao3y8d'
    },
    {
      id: 4,
      name: 'Thalia Lembong',
      imageUrl: 'https://instagram.fdel21-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/131640334_3487915307970709_839402090935801320_n.jpg?_nc_ht=instagram.fdel21-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=guU03AIu5uMAX_IempJ&tp=1&oh=dd193605a64124a8bddb239bb5f549b2&oe=602330DB',
      descriptionUrl:'https://www.instagram.com/p/CJI9pTWnoU1/?igshid=11uhlf4xow4sh'
    },
    {
      id: 5,
      name: 'Tanisha Naqvi',
      imageUrl: 'https://instagram.fdel21-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/133018343_761936574404929_805897601041895457_n.jpg?_nc_ht=instagram.fdel21-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=uye-RcTZookAX_Ftfrp&tp=1&oh=a18c207ca443c96d9fad11918fec3809&oe=60233899',
      descriptionUrl:'https://www.instagram.com/p/CJI9UY6nNKC/?igshid=18ja8cgrz3qbt'
    },
    {
      id: 6,
      name: 'Tan Kwan Hong',
      imageUrl: 'https://instagram.fdel21-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/131888124_2746000078999419_6455556043888223596_n.jpg?_nc_ht=instagram.fdel21-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=srBeMFyu3g8AX92mFDW&tp=1&oh=52ee1062519e8153a3af3f849b554508&oe=602146F1',
      descriptionUrl:'https://www.instagram.com/p/CI5V6wKHAVg/?igshid=75pcg0scmd23'
    },
    {
      id: 7,
      name: 'Dewi Laurente',
      imageUrl: 'https://instagram.fdel21-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/131887845_499946557646659_3334368921760551535_n.jpg?_nc_ht=instagram.fdel21-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Ws51tUZ3AxwAX_mS1ZY&tp=1&oh=9ea98355542a638b509e9b93f88c94c9&oe=60239F00',
      descriptionUrl:'https://www.instagram.com/p/CI5Vz-mntJm/?igshid=1rhyo3qm3dzwl'
    },
    {
      id: 8,
      name: 'Aditya Gupta',
      imageUrl: 'https://instagram.fdel21-1.fna.fbcdn.net/v/t51.2885-15/e35/135440028_751898222390010_2530106773733558626_n.jpg?_nc_ht=instagram.fdel21-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=4HoSA4EAehMAX8vC_2G&tp=1&oh=56b8e69d66e7539b59b0458173999a31&oe=602232FE',
      descriptionUrl:'https://www.instagram.com/p/CJrOja_nEQ9/?igshid=4cnzv30qvgjs'
    },
    {
      id: 9,
      name: 'Abhinav Pawar',
      imageUrl: 'https://instagram.fdel21-1.fna.fbcdn.net/v/t51.2885-15/e35/136057259_709130483126025_4178537987898590047_n.jpg?_nc_ht=instagram.fdel21-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=pWT9fOWTVUsAX-J_YPS&tp=1&oh=5d462268cae778a6d0ff2fd289800584&oe=60238F38',
      descriptionUrl:'https://www.instagram.com/p/CJrOqbvnmiz/?igshid=1etwqd2l2rchc'
    },
    {
      id: 10,
      name: 'Tanya Malik',
      imageUrl: 'https://instagram.fdel21-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/136346423_1351804051825539_5192963625329391614_n.jpg?_nc_ht=instagram.fdel21-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=XCVFXOvLkNEAX8d0p72&tp=1&oh=0153ebfa85b37fbb203b04646ee26749&oe=6023B0BC',
      descriptionUrl:'https://www.instagram.com/p/CJx013unAr1/'
    },
    {
      id: 11,
      name: 'Farah Nur Risa',
      imageUrl: 'https://instagram.fdel21-1.fna.fbcdn.net/v/t51.2885-15/e35/136182174_310788177023372_2606434632976805309_n.jpg?_nc_ht=instagram.fdel21-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=QMvULOQzpcEAX_PWEri&tp=1&oh=47d268485c18a3513b44fbb76f7c2a74&oe=6021AD04',
      descriptionUrl:'https://www.instagram.com/p/CJx0kPgHTwm/'
    },
    {
      id: 12,
      name: 'Cindy Fiola',
      imageUrl: 'https://instagram.fdel21-1.fna.fbcdn.net/v/t51.2885-15/e35/136411403_230793115241181_100947416831162461_n.jpg?_nc_ht=instagram.fdel21-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=1MFmGyHITr8AX_iI00U&tp=1&oh=0cd98f46b8252be786b36c31d600502c&oe=6023C494',
      descriptionUrl:'https://www.instagram.com/p/CJx1jQOn931/'
    },
    {
      id: 13, 
      name: 'Grace Lee Zhi Aqu',
      imageUrl: 'https://instagram.fdel21-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/136121473_254482072766767_2946179666573012079_n.jpg?_nc_ht=instagram.fdel21-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=J8T-2OL7AckAX9WD38h&tp=1&oh=5ab2ae8fa5950a92ae736102100fb0f5&oe=6021AD37',
      descriptionUrl:'https://www.instagram.com/p/CJx1QJhHqUY/'
    },
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

  public getOpenMicSpeakers(): Observable<any> {
    return of(this.openMicSpeakers);
}

}