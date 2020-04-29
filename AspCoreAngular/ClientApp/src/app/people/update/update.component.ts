import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  personForm: FormGroup;
  id: number;
  p: Person;
  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private personService: PersonService) { }

  ngOnInit(): void {
    this.personForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      hobby: [''],
      age: [0],
      id: [0]
    });
    this.fetchData();
  }

  fetchData() {
    //this.route.queryParams.subscribe(params => {
    //  const id = params['id'];
    //});
    this.route.params.subscribe(params => {
    this.id = params['id'];
    this.personService.getById(this.id).subscribe(p =>{
      this.personForm.setValue({
        firstName: p.firstName, lastName: p.lastName,
        hobby: p.hobby, age: p.age, id: p.id
      });
     });
    });
  }

  submitForm() {
    this.personService.update(this.id, this.personForm.value).subscribe(res => {
      console.log('Person update!');
      this.router.navigateByUrl('/people');
    });
  }
}
