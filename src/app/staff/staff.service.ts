import { Injectable } from '@angular/core';
import { LeaveApplication } from '../hod/leave';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

 constructor() { }
  private localStorageKey = 'staffData';
  private leaveApplications: any[] = [];

//total leaves count
getTotalLeavesApplied(): number {
    const staffData = JSON.parse(localStorage.getItem(this.localStorageKey) || 'null') || { leaveApplications: [] };
    return staffData.leaveApplications.length;
  }

  getTotalApprovedLeaves(): number {
    const staffData = JSON.parse(localStorage.getItem(this.localStorageKey) || 'null') || { leaveApplications: [] };
    return staffData.leaveApplications.filter((app: LeaveApplication) => app.status === 'approved').length;
  }

  // Simulate getting the count of rejected leaves
  getTotalRejectedLeaves(): number {
    const staffData = JSON.parse(localStorage.getItem(this.localStorageKey) || 'null') || { leaveApplications: [] };
    return staffData.leaveApplications.filter((app: LeaveApplication) => app.status === 'rejected').length;
  }

  
}
