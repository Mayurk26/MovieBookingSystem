import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBookedComponent } from './customer-booked.component';

describe('CustomerBookedComponent', () => {
  let component: CustomerBookedComponent;
  let fixture: ComponentFixture<CustomerBookedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerBookedComponent]
    });
    fixture = TestBed.createComponent(CustomerBookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
