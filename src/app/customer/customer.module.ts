import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerMovieComponent } from './customer-movie/customer-movie.component';
import { CustomerBookedComponent } from './customer-booked/customer-booked.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerConfirmComponent } from './customer-confirm/customer-confirm.component';
import { CustomerMybookingsComponent } from './customer-mybookings/customer-mybookings.component';
import { ReactiveFormsModule} from '@angular/forms';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerGenreComponent } from './customer-genre/customer-genre.component';
import { CustomerGenremoviesComponent } from './customer-genremovies/customer-genremovies.component'

@NgModule({
  declarations: [
    CustomerHomeComponent,
    CustomerMovieComponent,
    CustomerBookedComponent,
    CustomerConfirmComponent,
    CustomerMybookingsComponent,
    CustomerSearchComponent,
    CustomerGenreComponent,
    CustomerGenremoviesComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
