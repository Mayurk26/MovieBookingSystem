import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';
import { AdminAddMovieComponent } from './admin-add-movie/admin-add-movie.component';
import { AdminTotalBookingsComponent } from './admin-total-bookings/admin-total-bookings.component';
import { AdminUpdateMovieComponent } from './admin-update-movie/admin-update-movie.component';

const routes: Routes = [
  {path:'admin-home',component:AdminHomeComponent},
  {path:'admin-add-user',component:AdminAddUserComponent},
  {path:'admin-add-movie',component:AdminAddMovieComponent},
  {path:'admin-total-bookings',component:AdminTotalBookingsComponent},
  {path:'admin-update-movie',component:AdminUpdateMovieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
