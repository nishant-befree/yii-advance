import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientloginComponent } from './clientlogin.component';

describe('ClientloginComponent', () => {
  let component: ClientloginComponent;
  let fixture: ComponentFixture<ClientloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
