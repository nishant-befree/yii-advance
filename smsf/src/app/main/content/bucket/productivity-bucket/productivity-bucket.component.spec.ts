import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivityBucketComponent } from './productivity-bucket.component';

describe('ProductivityBucketComponent', () => {
  let component: ProductivityBucketComponent;
  let fixture: ComponentFixture<ProductivityBucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductivityBucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductivityBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
