import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isHOD: boolean = false;
 
 constructor(private dashboardService: DashboardService) {
    const userData = localStorage.getItem('user');
     
  if (userData) {
      const parsedUserData = JSON.parse(userData);
      this.isHOD = parsedUserData.role === 'HOD';
    }
     }
 }
 

