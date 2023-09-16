import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGenreComponent } from './customer-genre.component';

describe('CustomerGenreComponent', () => {
  let component: CustomerGenreComponent;
  let fixture: ComponentFixture<CustomerGenreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerGenreComponent]
    });
    fixture = TestBed.createComponent(CustomerGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
