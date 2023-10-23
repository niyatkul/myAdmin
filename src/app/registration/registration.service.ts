import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor() { }

  registerHod(hodData: any): void {
    const hodDataList = this.getHodData();
    hodDataList.push(hodData);
    localStorage.setItem('hodData', JSON.stringify(hodDataList));
    console.log('Registered Hod Data:', hodData);
  }

  registerStaff(staffData: any): void {
    const staffDataList = this.getStaffData(); 
    staffDataList.push(staffData);
    localStorage.setItem('staffData', JSON.stringify(staffDataList)); 
    console.log('Registered Staff Data:', staffData);
  }

  getHodData(): any[] {
    const hodData = JSON.parse(localStorage.getItem('hodData') || '[]');
    return hodData;
  }

  getStaffData(): any[] {
    const staffData = JSON.parse(localStorage.getItem('staffData') || '[]');
    return staffData;
  }


}

