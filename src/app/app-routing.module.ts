import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { CustomerBookedComponent } from './customer/customer-booked/customer-booked.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin-home',component:AdminHomeComponent},
  {path:'customer-home',component:CustomerHomeComponent},
  {path:'customer-booked',component:CustomerBookedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
