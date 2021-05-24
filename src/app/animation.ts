import {animate, state, style, transition, trigger} from '@angular/animations'
export const changeDivSize = 
    trigger('changeDivSize', [
        state('initial', style({
          backgroundColor: 'green',
          width: '100px',
          height: '100px'
        })),
        state('final', style({
            backgroundColor: 'red',
            width: '100px',
            height: '100px',
            position: 'absolute',
            left:'20%'
          
        })),
        transition('initial=>final', animate('1500ms')),
        transition('final=>initial', animate('1000ms'))
    ])
    export const fadeInOut = 
    trigger('fadeInOut', [
        state('void', style({
          opacity:'0'
        })),

        transition(':enter, :leave', animate(1500)),
])