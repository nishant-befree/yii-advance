import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingItemComponent } from './pending-item.component';

describe('PendingItemComponent', () => {
  let component: PendingItemComponent;
  let fixture: ComponentFixture<PendingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
