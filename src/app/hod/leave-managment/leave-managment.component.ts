import { Component } from '@angular/core';
// import { Leave } from './leave.model';
import { LeaveService } from '../leave.service';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-leave-managment',
  templateUrl: './leave-managment.component.html',
  styleUrls: ['./leave-managment.component.css']
})
export class LeaveManagmentComponent {

  leaveRequests: any[] = [];

  faCheck = faCheck;
  faTimes = faTimes;
  constructor(private leaveService: LeaveService) {
   this.leaveRequests = this.leaveService.getLeaveRequests();
  }

  approveLeave(leave: any) {
    this.leaveService.approveLeave(leave);
    this.leaveRequests = this.leaveService.getLeaveRequests();
  }

  rejectLeave(leave: any) {
    this.leaveService.rejectLeave(leave);
    this.leaveRequests = this.leaveService.getLeaveRequests();
  }

  viewLeave(leave: any) {
    this.leaveService.viewLeave(leave);
    this.leaveRequests = this.leaveService.getLeaveRequests();
  }

}
