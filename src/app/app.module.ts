import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { StaffComponent } from './registration/staff/staff.component';
import { HodComponent } from './registration/hod/hod.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { RegistrationService } from './registration/registration.service';
import { LoginService } from './login/login.service';
import { AuthGuard } from './auth.guard';
import { StaffManagementComponent } from './hod/staff-management/staff-management.component';
import { LeaveManagmentComponent } from './hod/leave-managment/leave-managment.component';
import { LeaveManagementComponent } from './staff/leave-management/leave-management.component';
import { CommonModule } from '@angular/common';
import { LeaveService } from './hod/leave.service';
import { ApplyLeaveComponent } from './staff/apply-leave/apply-leave.component';
import { HttpClientModule } from '@angular/common/http';
import { HodMenuComponent } from './hod-menu/hod-menu.component';
import { StaffMenuComponent } from './staff-menu/staff-menu.component';
import { DashboardService } from './login/dashboard.service';
import { StaffMService } from './hod/staff-m.service';
import { StaffService } from './staff/staff.service';
import { StaffModalComponent } from './hod/staff-modal/staff-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StaffComponent,
    HodComponent,
    DashboardComponent,
    StaffManagementComponent,
    LeaveManagmentComponent,
    LeaveManagementComponent,
    ApplyLeaveComponent,
    HodMenuComponent,
    StaffMenuComponent,
    StaffModalComponent,

   
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ModalModule.forRoot(),
    MatDialogModule
    
     ],
  providers: [AuthGuard,RegistrationService, LoginService,LeaveService,DashboardService,StaffMService,StaffService,LeaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
