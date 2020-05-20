import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberAddComponent } from './member-add/member-add.component';
import { MemberGetComponent } from './member-get/member-get.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MemberService } from './member.service';
import { SingerNgClassComponent } from './singer-ng-class/singer-ng-class.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberAddComponent,
    MemberGetComponent,
    MemberEditComponent,
    SingerNgClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
