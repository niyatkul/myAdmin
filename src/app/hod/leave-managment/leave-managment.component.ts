import { Component } from '@angular/core';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave-managment',
  templateUrl: './leave-managment.component.html',
  styleUrls: ['./leave-managment.component.css']
})
export class LeaveManagmentComponent {
leaveRequests: any[] = [];
  
constructor(private leaveService: LeaveService) {
  this.leaveRequests = this.leaveService.getLeaveApplications();
}

approveLeave(leave: any) {
  this.leaveService.approveLeave(leave);
  this.leaveRequests = this.leaveService.getLeaveApplications();
}

rejectLeave(leave: any) {
  this.leaveService.rejectLeave(leave);
  this.leaveRequests = this.leaveService.getLeaveApplications();
}

}
