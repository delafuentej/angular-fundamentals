import { Component } from '@angular/core';

@Component({
    selector:'event-list',
    template:`
    <div>
        <h1>Upcoming Events:</h1>  
    <hr/>
    
    <event-thumbnail 
        #thumbnail
        [event]="event1">
    </event-thumbnail>
   

</div>
    `
})

export class EventsListComponent {
    event1 = {
        id:1,
        name:'Angular Connect',
        date:'8/24/2025',
        time:'08:00 am',
        price:1000,
        imageUrl:'../../assets/images/angularconnect-shield.png',
        location:{
            address:'666 DT',
            city:'Liverpool',
            country:'England'
        }
    }
    
}