import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , ActivatedRouteSnapshot} from '@angular/router';
import { EventsAppComponent } from './events-app.component';
import { 
        EventsListComponent, 
        EventThumbnailComponent,
        EventService,
        EventDetailsComponent,
        CreateEventComponent,
        EventRouteActivator,
        EventListResolver,
        CreateSessionComponent,
        SessionListComponent,
        VoterService,
        LocationValidator,
        DurationPipe
      } from './events/index'

import { NavBarComponent } from './nav/navbar.component';

import { TOASTR_TOKEN, Toastr, CollapsibleWell, JQ_TOKEN,SimpleModalComponent, ModalTriggerDirective} from './common/index';


import { appRoutes } from './routes';

import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpVoteComponent } from './events/event-details/upvote.component';






let toastr:Toastr= window['toastr'];
let jQuery= window['$']


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    Error404Component,
    NavBarComponent,
    SessionListComponent,
    CollapsibleWell,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpVoteComponent,
    LocationValidator,
    DurationPipe,
    
    
  


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ 
    EventService, 
    { 
      provide: TOASTR_TOKEN,
      useValue: toastr

    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },

    {
      provide:EventRouteActivator,
      useClass:EventRouteActivator
    },
    /* EventRouteActivator,  */
    EventListResolver,
    VoterService,
    AuthService,
    
    {
      provide:'canDeactivateCreateEvent',
      useValue: checkDirtyState

    }],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true;
}
