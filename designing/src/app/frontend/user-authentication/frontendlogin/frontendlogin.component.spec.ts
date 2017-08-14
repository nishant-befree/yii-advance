import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendloginComponent } from './frontendlogin.component';

describe('FrontendloginComponent', () => {
  let component: FrontendloginComponent;
  let fixture: ComponentFixture<FrontendloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
