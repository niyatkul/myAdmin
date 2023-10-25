import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {
 
  totalLeavesApplied!: number;
  totalApprovedLeaves!: number;
  totalRejectedLeaves!: number;

  constructor(private staffService:StaffService) {
 }
  ngOnInit() {
   
    this.totalLeavesApplied = this.staffService.getTotalLeavesApplied();
    this.totalApprovedLeaves = this.staffService.getTotalApprovedLeaves();
    this.totalRejectedLeaves = this.staffService.getTotalRejectedLeaves();
  }
  }


