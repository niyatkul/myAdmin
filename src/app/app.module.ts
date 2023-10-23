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
import { NavbarComponent } from './navbar/navbar.component';
import { StaffManagementComponent } from './hod/staff-management/staff-management.component';
import { LeaveManagmentComponent } from './hod/leave-managment/leave-managment.component';
import { LeaveManagementComponent } from './staff/leave-management/leave-management.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StaffComponent,
    HodComponent,
    DashboardComponent,
    NavbarComponent,
    StaffManagementComponent,
    LeaveManagmentComponent,
    LeaveManagementComponent,
   
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    
    
    
    
   ],
  providers: [AuthGuard, RegistrationService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
