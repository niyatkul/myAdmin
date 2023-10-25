import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { LeaveManagementComponent } from '../staff/leave-management/leave-management.component';
import { LeaveApplication } from './leave';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
 private localStorageKey = 'leaveApplications';

 constructor(private leaveService:LeaveService,
    private http: HttpClient) { }

    getLeaveApplications(): any[] {
      const leaveApplications = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
      return leaveApplications;
    }

    submitLeaveRequest(leave: any) {
      const leaveApplications = this.getLeaveApplications();
      leaveApplications.push(leave);
      localStorage.setItem(this.localStorageKey, JSON.stringify(leaveApplications));
    }
    approveLeave(leave: any) {
      //finding the leave reqto approve on store data 
      const leaveApplications = this.getLeaveApplications();
      const leaveIndex = leaveApplications.findIndex((item: any) => item.id === leave.id);
       if (leaveIndex !== -1) {
        leaveApplications[leaveIndex].status = 'Approved';
        // Update the data in local storage
        localStorage.setItem(this.localStorageKey, JSON.stringify(leaveApplications));
      }
    }
  
    rejectLeave(leave: any) {
     const leaveApplications = this.getLeaveApplications();
      const leaveIndex = leaveApplications.findIndex((item: any) => item.id === leave.id);
    if (leaveIndex !== -1) {
        // Update the status to "Rejected"
        leaveApplications[leaveIndex].status = 'Rejected';
       // Update the data in local storage
        localStorage.setItem(this.localStorageKey, JSON.stringify(leaveApplications));
      }
    }
}

