import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendAppComponent } from './frontend-app.component';

describe('FrontendAppComponent', () => {
  let component: FrontendAppComponent;
  let fixture: ComponentFixture<FrontendAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
