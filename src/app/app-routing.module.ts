import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { StaffComponent } from './modules/staff/staff.component';
import { AdminComponent } from './auth/page/admin/admin.component';


import { SignInComponent } from './auth/page/sign-in/sign-in.component';
import { SignOutComponent } from './auth/page/sign-out/sign-out.component';
import { SignUpComponent } from './auth/page/sign-up/sign-up.component';
import { RouterGuard } from './core/services/RouteGuard';


const routes: Routes = [
  {path: '', redirectTo:'dashboard', pathMatch: 'full'},  
  {path:'dashboard', component: DashboardComponent },
  {path:'Sign-in', component: SignInComponent },
  {path:'admin', component: AdminComponent},
  {path:'staff', component: StaffComponent },
  {path:'Sign-out', component: SignOutComponent },
  {path:'Sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
