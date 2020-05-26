import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tv-rating-form',
  templateUrl: './tv-rating-form.component.html',
  styleUrls: ['./tv-rating-form.component.css']
})
export class TvRatingFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
  result = '';
  tvShows = [
    { name: 'Better call Saul!' },
    { name: 'Breaking Bad' },
    { name: 'Lost' },
    { name: 'Mad men' }
  ];

  form = new FormGroup({
    tvShow: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
  });

  submit() {
    this.result = JSON.stringify(this.form.value);
    this.form.reset();
  }


}
