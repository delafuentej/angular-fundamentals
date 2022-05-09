import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector:'upvote',
    styleUrls:['./upvote.component.css'],
    template:`
        <div
            
            class="votingWidgetContainer pointable"
            (click)="onClick()"
        >
            <div class="well votingWidget">
                <div class="votingButton">
                    <i
                    
                    class="glyphicon glyphicon-heart"
                    [style.color]="iconColor"
                    >
                    </i> 
                    <!-- <i
                    *ngIf="!voted"
                    class="glyphicon glyphicon-heart-empty"
                    >
                    </i>  -->
                </div>

                <div
                 class="badge badge-inverse votingCount"
                >
                    {{count}}
                </div>

            </div>
        
        </div>
    
    `
})

export class UpVoteComponent{
    @Input() count:number;
    @Input() set voted(value){
        this.iconColor= value ? 'red': 'white';
    }
    @Output() vote= new EventEmitter();
    iconColor:string;
    


   
    onClick(){
        this.vote.emit({});
    }
}