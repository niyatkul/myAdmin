import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
 
 private localStorageKey = 'registrationData';

  constructor() {}

  registerHod(hodData: any): void {
    const data = this.getRegistrationData();
    data.hod.push(hodData);
    data.users.push({ username: hodData.username, password: hodData.password, role: 'hod' });
    this.setRegistrationData(data);
  }

  registerStaff(staffData: any): void {
    const data = this.getRegistrationData();
    data.staff.push(staffData);
    data.users.push({ username: staffData.username, password: staffData.password, role: 'staff' });
    this.setRegistrationData(data);
  }

  getRegistrationData(): any {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : { hod: [], staff: [], users: [] };
  }

  setRegistrationData(data: any): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(data));
  }
}