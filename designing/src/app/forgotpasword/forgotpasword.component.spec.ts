import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpaswordComponent } from './forgotpasword.component';

describe('ForgotpaswordComponent', () => {
  let component: ForgotpaswordComponent;
  let fixture: ComponentFixture<ForgotpaswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotpaswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
