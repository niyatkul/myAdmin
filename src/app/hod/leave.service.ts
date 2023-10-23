import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private leaveRequests: any[] = [
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
    
  ];
  constructor(private leaveService:LeaveService) {
    this.leaveRequests = this.leaveService.getLeaveRequests(); }

  getLeaveRequests(): any[] {
    return this.leaveRequests; // Returns all leave requests (you can filter by department)
  }
  approveLeave(leave: any) {
    // Implement the logic to change the status to 'Approved'
    const index = this.leaveRequests.findIndex((request) => request.srNo === leave.srNo);
    if (index !== -1) {
      this.leaveRequests[index].status = 'Approved';
    }
  }
  rejectLeave(leave: any) {
    // Implement the logic to change the status to 'Rejected'
    const index = this.leaveRequests.findIndex((request) => request.srNo === leave.srNo);
    if (index !== -1) {
      this.leaveRequests[index].status = 'Rejected';
    }
  }
  viewLeave(leave:any) {
    const index = this.leaveRequests.findIndex((request) => request.srNo === leave.srNo);
    if (index !== -1) {
      this.leaveRequests[index].status = 'viewed';
  }
}




}
