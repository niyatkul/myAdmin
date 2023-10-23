import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-hod-dashboard',
  templateUrl: './hod-dashboard.component.html',
  styleUrls: ['./hod-dashboard.component.css']
})
export class HodDashboardComponent {
  totalStaff: number;

  constructor(private dashboardService:DashboardService,
    private router: Router) {
   
    this.totalStaff = this.dashboardService.getTotalStaffCount();
  }
}
