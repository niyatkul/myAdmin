import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  getTotalStaffCount(): number {
    
    const staffList = JSON.parse(localStorage.getItem('staffList') || '[]');
    return staffList.length;
  }
 
}
