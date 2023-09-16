import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMovieComponent } from './customer-movie.component';

describe('CustomerMovieComponent', () => {
  let component: CustomerMovieComponent;
  let fixture: ComponentFixture<CustomerMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerMovieComponent]
    });
    fixture = TestBed.createComponent(CustomerMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
