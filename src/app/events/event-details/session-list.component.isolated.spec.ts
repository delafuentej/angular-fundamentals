import { SessionListComponent } from './session-list.component';
import { ISessions } from '../shared/event.model';

describe('SessionListComponent',()=>{
    let component: SessionListComponent;
    let mockAuthService, mockVoterService;

    beforeEach(()=>{
        component= new SessionListComponent(mockAuthService, mockVoterService)
    })

    describe('ngOnChanges',()=>{

        it('shold filter the sessions correctly', ()=>{
            component.sessions=<ISessions[]>[ 
                {name: 'session 1', level:'intermediate'},
                {name: 'session 2', level:'intermediate'},
                {name: 'session 3', level:'beginner'}
            ];
            component.filterBy= 'intermediate';
            component.sortBy='name',
            component.eventId=3;

            component.ngOnChanges();

            expect(component.visibleSessions.length).toBe(2)

        })

        it('shold sort the sessions correctly', ()=>{
            component.sessions=<ISessions[]>[ 
                {name: 'session 1', level:'intermediate'},
                {name: 'session 3', level:'intermediate'},
                {name: 'session 2', level:'beginner'}
            ];
            component.filterBy= 'all';
            component.sortBy='name',
            component.eventId=3;

            component.ngOnChanges();

            expect(component.visibleSessions[2].name).toBe('session 3')

        })
    })
})