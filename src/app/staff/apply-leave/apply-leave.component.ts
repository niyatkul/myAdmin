import { Component } from '@angular/core';
import { ApplyLeaveService } from '../apply-leave.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {
  leaveFromDate!: string;
  leaveToDate!: string;
  reason!: string;

 constructor(private applyLeaveService:ApplyLeaveService, private router: Router){}

  submitLeaveApplication() {
    // Create a leave application object
      const leaveApplication = {
      fromDate: this.leaveFromDate,
      toDate: this.leaveToDate,
      reason: this.reason,
    };

    // Call the service to add the leave application
    this.applyLeaveService.addLeaveApplication(leaveApplication);

    // Optionally, you can clear the form fields after submission
    this.leaveFromDate = '';
    this.leaveToDate = '';
    this.reason = '';
  }
}
