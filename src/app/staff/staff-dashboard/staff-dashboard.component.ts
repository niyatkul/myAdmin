import { Component } from '@angular/core';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent {

  totalLeavesApplied: number;
  totalApprovedLeaves: number;
  totalRejectedLeaves: number;

  constructor(private staffService:StaffService) {

    this.totalLeavesApplied = this. staffService.getTotalLeavesApplied();
    this.totalApprovedLeaves = this. staffService.getTotalApprovedLeaves();
    this.totalRejectedLeaves = this. staffService.getTotalRejectedLeaves();
  }

}
