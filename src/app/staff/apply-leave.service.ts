import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplyLeaveService {
  
  private storageKey = 'leaveApplications';
  private leaveApplications: any[]=[];

  constructor() {
    this.initializeData();

   }
   private initializeData() {
    const data = localStorage.getItem(this.storageKey);
    this.leaveApplications = data ? JSON.parse(data) : [];
  }
// Add a new leave application and update local storage
  addLeaveApplication(application: any) {
    this.leaveApplications.push(application);
    this.updateLocalStorage();
  }
 // Get all leave applications
  getLeaveApplications() {
    return this.leaveApplications;
  }
 // Update local storage with the current data
  private updateLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.leaveApplications));
  }
}



