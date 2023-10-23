import { Component , OnInit} from '@angular/core';
import { LeaveService } from 'src/app/hod/leave.service';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.css']
})
export class LeaveManagementComponent {
  leaveRequests: any[] = [
    {
      fromDate: '2023-02-10',
      toDate: '2023-02-15',
      reason: 'Vacation',
      status: 'Approved'
    },
    {
      fromDate: '2023-03-20',
      toDate: '2023-03-25',
      reason: 'Sick leave',
      status: 'Pending'
    },
    {
      fromDate: '2023-03-30',
      toDate: '2023-04-05',
      reason: 'personal work',
      status: 'rejected' 
    },
  ];

  viewLeaveDetails() {

  }

}
