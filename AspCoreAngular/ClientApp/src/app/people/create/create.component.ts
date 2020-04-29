import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router,
    private personService: PersonService) { }

  personForm: FormGroup;

  ngOnInit() {
    this.personForm = this.fb.group({
      firstName: ['First Name', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      lastName: ['LastName', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      hobby: ['h'],
      age: [0],
      id: [0]
    });
  }

  submitForm() {
    this.personService.create(this.personForm.value).subscribe(res => {
      console.log('Person created!');
      this.router.navigateByUrl('/people');
    });
  }
}
