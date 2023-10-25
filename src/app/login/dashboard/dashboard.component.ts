import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // role: string = '';
 
  isHod: boolean = false; 
  isStaff: boolean = false;

  constructor(private dashboardService: DashboardService) { }

   ngOnInit() {
    const userRole = this.dashboardService.getUserRole();
    this.isHod = userRole === 'hod';
    this.isStaff = userRole === 'staff';
  }

  
}
 

