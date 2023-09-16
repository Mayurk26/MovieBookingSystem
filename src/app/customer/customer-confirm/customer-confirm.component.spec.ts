import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerConfirmComponent } from './customer-confirm.component';

describe('CustomerConfirmComponent', () => {
  let component: CustomerConfirmComponent;
  let fixture: ComponentFixture<CustomerConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerConfirmComponent]
    });
    fixture = TestBed.createComponent(CustomerConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
