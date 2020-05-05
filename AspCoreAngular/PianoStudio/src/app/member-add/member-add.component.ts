import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ms: MemberService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      MemberName: ['', Validators.required],
      MemberBio: ['', Validators.required],
      MemberAge: [0, Validators.required]
    });
  }

  addMember(memberName, memberBio, memberAge) {
    this.ms.addMember(memberName, memberBio, memberAge);
    this.router.navigate(['members']);
  }
  ngOnInit(): void {
  }

}
