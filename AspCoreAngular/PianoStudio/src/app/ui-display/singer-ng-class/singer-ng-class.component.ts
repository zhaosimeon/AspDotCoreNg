import { Component, OnInit } from '@angular/core';
import Singer from './singer';

@Component({
  selector: 'app-singer-ng-class',
  templateUrl: './singer-ng-class.component.html',
  styleUrls: ['./singer-ng-class.component.css']
})
export class SingerNgClassComponent implements OnInit {
  public singers: Singer[];
  constructor() { }

  ngOnInit(): void {
    this.singers = [
      {
     'artist': 'Michael Jackson',
     'country': 'USA'
   },
   {
     'artist': 'Justin Bieber',
     'country': 'Canada'
   },
   {
     'artist': 'Daddy Yankee',
     'country': 'Purto Rico'
   },
   {
      'artist': 'A R Rehman',
       'country': 'India'
   },
   {
       'artist': 'Selena Gomez',
       'country': 'USA'
   }
  ];
  }

}
