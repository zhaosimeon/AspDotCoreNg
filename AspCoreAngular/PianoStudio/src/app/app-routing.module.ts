import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MemberAddComponent} from './member-add/member-add.component';
import {MemberGetComponent} from './member-get/member-get.component';
import {MemberEditComponent} from './member-edit/member-edit.component';
import { SingerNgClassComponent } from './singer-ng-class/singer-ng-class.component';
import {DemoAnimationComponent} from './demo-animation/demo-animation.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: 'member/create',
    component: MemberAddComponent
  },
  {
    path: 'edit/:id',
    component: MemberEditComponent
  },
  {
    path: 'members',
    component: MemberGetComponent
  },
  {
    path: 'singers',
    component: SingerNgClassComponent
  }  ,
  {
    path: 'animations',
    component: DemoAnimationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
