import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGenremoviesComponent } from './customer-genremovies.component';

describe('CustomerGenremoviesComponent', () => {
  let component: CustomerGenremoviesComponent;
  let fixture: ComponentFixture<CustomerGenremoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerGenremoviesComponent]
    });
    fixture = TestBed.createComponent(CustomerGenremoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
