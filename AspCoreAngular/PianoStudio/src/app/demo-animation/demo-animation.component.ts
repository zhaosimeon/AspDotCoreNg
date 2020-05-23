import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-animation',
  templateUrl: './demo-animation.component.html',
  styleUrls: ['./demo-animation.component.css']
})
export class DemoAnimationComponent implements OnInit {
  title = 'Angular 9 Animations Tutorial';
  nextState = 'normal';
  constructor() { }

  ngOnInit(): void {
  }  
  animateSquare(state) {
    this.nextState = state;
  }
}
