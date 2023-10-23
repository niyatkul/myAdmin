import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardService } from './dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
isUserLoggedIn() {
  throw new Error('Method not implemented.');
}

constructor(private dashboardService: DashboardService) {}

// login(username: string, password: string): boolean {
 
//   if (username === 'hod' && password === 'hodpassword') {
//     this.storeUserData('userRole', 'HOD');
//     return true;
//   } else if (username === 'staff' && password === 'staffpassword') {
//     this.storeUserData('userRole', 'Staff');
//     return true;
//   } else {
//     return false;
//   }
// }

// logout(): void {
//   localStorage.removeItem('user');
// }

login(username: string, password:string): boolean {
  if(username ===  'hod' && password === 'password') {
    this.dashboardService.setUserRole('HOD');
    return true;
  } else if (username ===  'hod' && password === 'password') {
    this.dashboardService.setUserRole('staff');
    return true;
  }
  return false;
}

logout() {
 
  localStorage.removeItem('userRole');
}



  //   storeUserData(key: string, data: any): void {
  //   localStorage.setItem(key, JSON.stringify(data));
  // }

  // getUserData(key: string): any {
  //   const data = localStorage.getItem(key);
  //   return data ? JSON.parse(data) : null;
  // }

  // removeUserData(key: string): void {
  //   localStorage.removeItem(key);
  // }

  //  isUserLoggedIn(): boolean {
  //   const userData = this.getUserData('userRole'); 
  //   return !!userData; 
  // }
  // getUserRole(): string | null {
  //   return this.getUserData('userRole');
  // }
   }

