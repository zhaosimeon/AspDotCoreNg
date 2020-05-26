import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingerNgClassComponent } from './singer-ng-class.component';

describe('SingerNgClassComponent', () => {
  let component: SingerNgClassComponent;
  let fixture: ComponentFixture<SingerNgClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingerNgClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingerNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
