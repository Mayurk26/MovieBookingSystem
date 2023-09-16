import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTotalBookingsComponent } from './admin-total-bookings.component';

describe('AdminTotalBookingsComponent', () => {
  let component: AdminTotalBookingsComponent;
  let fixture: ComponentFixture<AdminTotalBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTotalBookingsComponent]
    });
    fixture = TestBed.createComponent(AdminTotalBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
