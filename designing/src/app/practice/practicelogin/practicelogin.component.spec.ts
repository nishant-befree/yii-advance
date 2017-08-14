import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeloginComponent } from './practicelogin.component';

describe('PracticeloginComponent', () => {
  let component: PracticeloginComponent;
  let fixture: ComponentFixture<PracticeloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
