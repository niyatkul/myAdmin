import { Component , OnInit} from '@angular/core';
import { LeaveService } from 'src/app/staff/leave.service';
import { Leave } from '../leave';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LeaveMComponent } from '../leave-m/leave-m.component';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.css']
})
export class LeaveManagementComponent implements OnInit {
  leaveApplications: any[] = [];

  constructor(private leaveService: LeaveService,private router:Router,
    private dialog: MatDialog) {
    
  }
 ngOnInit(): void {
   
    this.leaveApplications = this.leaveService.getLeaveApplications();
  }
  viewLeaveDetails(leave: any) {
    // Open a modal dialog to display leave details
    const dialogRef = this.dialog.open(LeaveMComponent, {
      data: leave // Pass the leave data to the dialog component
    });
  }

  openLeaveApplicationForm() {
    // Navigate to the leave application form
    this.router.navigate(['/staff/apply-leave']);
  }

}
