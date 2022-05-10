import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService } from '../events';
import { ISessions } from '../events/shared/event.model';


@Component({
    selector:'nav-bar',
    templateUrl:'./navbar.component.html',
    styles:[`
        .nav.navbar-nav {font-size:15px}
        #searchForm {margin-right:100px}
        li> a.active {color:greenyellow;}
        @media (max-width:1200px){#searchForm{display:none}}
    `]

})

export class NavBarComponent{
    searchTerm:string='';
    foundSessions:ISessions[];

    constructor(public auth: AuthService, private eventService: EventService){
       /* $('#id').modal() */

    }

    
    searchSessions(searchTerm){
        this.eventService.searchSessions(searchTerm).subscribe( sessions=> {
            this.foundSessions= sessions;
            /* console.log(this.foundSessions) */
        })

    }
}