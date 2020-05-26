import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TvRatingFormComponent } from './tv-rating-form/tv-rating-form.component';
import { AnimateComponent } from './animate/animate.component';
import { DemoAnimationComponent } from './demo-animation/demo-animation.component';
import { SingerNgClassComponent } from './singer-ng-class/singer-ng-class.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    TvRatingFormComponent,
    AnimateComponent,
    DemoAnimationComponent,
    SingerNgClassComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  exports: [
    TvRatingFormComponent,
    AnimateComponent,
    DemoAnimationComponent,
    SingerNgClassComponent
    
  ]

})
export class UiDisplayModule { }
