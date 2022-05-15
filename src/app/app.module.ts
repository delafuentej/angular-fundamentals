import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , ActivatedRouteSnapshot} from '@angular/router';
import { EventsAppComponent } from './events-app.component';
import { HttpClientModule } from '@angular/common/http';
import { 
        EventsListComponent, 
        EventThumbnailComponent,
        EventService,
        EventDetailsComponent,
        CreateEventComponent,
        /* EventRouteActivator, */
        EventResolver,
        EventListResolver,
        CreateSessionComponent,
        SessionListComponent,
        VoterService,
        LocationValidator,
        DurationPipe
      } from './events/index'

import { NavBarComponent } from './nav/navbar.component';

import { TOASTR_TOKEN, Toastr, CollapsibleWellComponent, JQ_TOKEN,SimpleModalComponent, ModalTriggerDirective} from './common/index';


import { appRoutes } from './routes';

import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpVoteComponent } from './events/event-details/upvote.component';

const toastr:Toastr= window['toastr'];
const jQuery= window['$']


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
    CollapsibleWellComponent,
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
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    
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


    /* {
      provide:EventRouteActivator,
      useClass:EventRouteActivator
    }, */
    /* EventRouteActivator,  */
    EventResolver,
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
