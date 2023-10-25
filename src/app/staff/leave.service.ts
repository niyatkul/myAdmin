import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private leaveApplications: any[] = [];
  private localStorageKey = 'leaveRequests';

   constructor() {
    const storedData = localStorage.getItem(this.localStorageKey);
    if (storedData) {
      this.leaveApplications = JSON.parse(storedData);
    }
  }
  getLeaveRequests(): any[] {
   
    return this.leaveApplications;//return the leave request
  }
  addLeaveRequest(leaveRequest: any) {
    // unique ID for the new leave request
    const id = new Date().getTime();

    //  new leave request with a generated ID
    this.leaveApplications.push({ id, ...leaveRequest });

    // Save  updated list to local storage
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.leaveApplications));
  }
  getLeaveApplications(): any[] {
    return this.leaveApplications;
  }
   }

