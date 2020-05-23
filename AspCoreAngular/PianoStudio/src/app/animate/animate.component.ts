import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations: [
    trigger('changeState', [
      state('normal', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('animated', style({
        backgroundColor: 'blue',
        transform: 'scale(1.5)'
      })),
      transition('*=>normal', animate('800ms')),
      transition('*=>animated', animate('200ms'))
    ])
  ]
})
export class AnimateComponent implements OnInit {
  @Input() currentState:string ;
  constructor() { }

  ngOnInit(): void {
  }

}
