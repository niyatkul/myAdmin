import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HodComponent } from './registration/hod/hod.component';
import { StaffComponent } from './registration/staff/staff.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { LeaveManagmentComponent } from './hod/leave-managment/leave-managment.component';
import { StaffManagementComponent } from './hod/staff-management/staff-management.component';
import { LeaveManagementComponent } from './staff/leave-management/leave-management.component';
import { AuthGuard } from './auth.guard';
import { HodDashboardComponent } from './hod/hod-dashboard/hod-dashboard.component';
import { StaffDashboardComponent } from './staff/staff-dashboard/staff-dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component: LoginComponent },
  {path: 'registerHod', component:HodComponent},
  {path:'registerStaff', component:StaffComponent},
  {path: 'login/dashboard', component:DashboardComponent, canActivate:[AuthGuard] },//facing issue 
  {path:'leaveManagement', component:LeaveManagementComponent},
  {path:'staffManagement', component:StaffManagementComponent},
  {path: 'leaveManagemnt', component:LeaveManagmentComponent},
  {path:'hod/hod-dashboard', component:HodDashboardComponent},
  {path:'staff/staff-dashboard', component:StaffDashboardComponent},
  {path:'staff/'}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
