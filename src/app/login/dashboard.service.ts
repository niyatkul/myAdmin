import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private userRole: string;

  constructor() {  this.userRole = 'HOD';}

 getUserRole(): string | null {
  return localStorage.getItem('userRole');
}
setUserRole(role: string): void {
  localStorage.setItem('userRole', role);
}
}
