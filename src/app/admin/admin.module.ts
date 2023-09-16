import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AgGridModule } from 'ag-grid-angular';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';
import { AdminAddMovieComponent } from './admin-add-movie/admin-add-movie.component';
import { AdminTotalBookingsComponent } from './admin-total-bookings/admin-total-bookings.component';
import { AdminUpdateMovieComponent } from './admin-update-movie/admin-update-movie.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminAddUserComponent,
    AdminAddMovieComponent,
    AdminTotalBookingsComponent,
    AdminUpdateMovieComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    AgGridModule
  ]
})
export class AdminModule { }
