import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  public persons: Person[];
  
  constructor(private personService: PersonService) { }

  ngOnInit() {
    
    this.personService.getPeople()
    .subscribe(result => { this.persons = result;}, error => console.error(error));
    
  }

  delete(id: any) {
    this.personService.delete(id).
    subscribe(result => { ;}, error => console.error(error));
  }
}

