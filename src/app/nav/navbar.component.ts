import { Component } from '@angular/core';

@Component({
    selector:'nav-bar',
    templateUrl:'./nav-var.component.html',
    styles:[`
        .nav.navbar-nav {font-size:15px}
        #searchForm {margin-right:100px}
        li> a.active {color:greenyellow;}
        @media (max-width:1200px){#searchForm{display:none}}
    `]
})

export class NavBarComponent{

}