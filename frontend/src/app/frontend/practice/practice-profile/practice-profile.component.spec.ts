import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeProfileComponent } from './practice-profile.component';

describe('PracticeProfileComponent', () => {
  let component: PracticeProfileComponent;
  let fixture: ComponentFixture<PracticeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
