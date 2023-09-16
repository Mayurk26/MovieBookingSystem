import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerMovieComponent } from './customer-movie/customer-movie.component';
import { CustomerBookedComponent } from './customer-booked/customer-booked.component';
import { CustomerConfirmComponent } from './customer-confirm/customer-confirm.component';
import { CustomerMybookingsComponent } from './customer-mybookings/customer-mybookings.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerGenreComponent } from './customer-genre/customer-genre.component';
import { CustomerGenremoviesComponent } from './customer-genremovies/customer-genremovies.component';

const routes: Routes = [
  {path:'customer-home',component:CustomerHomeComponent},
  {path:'customer-movie',component:CustomerMovieComponent},
  {path:'customer-booked',component:CustomerBookedComponent},
  {path:'customer-confirm',component:CustomerConfirmComponent},
  {path:'customer-mybookings',component:CustomerMybookingsComponent},
  {path:'customer-search',component:CustomerSearchComponent},
  {path:'customer-genre',component:CustomerGenreComponent},
  {path:'customer-genre/:name',component:CustomerGenremoviesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
