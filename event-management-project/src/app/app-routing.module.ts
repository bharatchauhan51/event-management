import { OpenMicSpeakersComponent } from './open-mic-speakers/open-mic-speakers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminParticipantsComponent } from './admin-participants/admin-participants.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminComponent } from './admin/admin.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsComponent } from './event/event.component';
import { RegisterEventsComponent } from './register-events/register-events.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TeamsComponent } from './team/team.component';


const routes: Routes = [
  {
    path: 'home',
    component: EventsComponent
  },
  {
    path: 'team',
    component: TeamsComponent
  },
  {
    path: 'registration',
    component: RegisterEventsComponent
  },
  {
    path: 'registration/open-mic-speakers',
    component: OpenMicSpeakersComponent
  },
  {
    path: 'event-details/open-mic-speakers',
    component: OpenMicSpeakersComponent
  }
  // ,{
  //   path: 'registration/:eventId',
  //   component: RegistrationFormComponent
  // }
  ,
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'event-details',
    component: EventDetailsComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children : [
      { path: 'home', component: AdminHomeComponent },
      { path: 'events', component: AdminEventsComponent },
      { path: 'participants', component: AdminParticipantsComponent },
      { path: 'users', component: AdminUsersComponent }
    ]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling : 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
