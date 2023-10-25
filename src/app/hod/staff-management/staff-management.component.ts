import { Component } from '@angular/core';
import { StaffMService } from '../staff-m.service';
import { Staffm } from '../staffm';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StaffModalComponent } from '../staff-modal/staff-modal.component';

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.css']
})
export class StaffManagementComponent {

   staffMembers: any[] = [];

   newStaffMember: any = {
    fullName: '',
    username: '',
    email: '',
    mobile: ''
  };

  bsModalRef!: BsModalRef;
  selectedStaffMember: any;
  
   constructor(private staffMService:StaffMService,
    private modalService: BsModalService) {
    this.staffMembers = this.staffMService.getStaffMembers();
  }

  addStaffMember() {
    if (this.newStaffMember.fullName && this.newStaffMember.username && this.newStaffMember.email && this.newStaffMember.mobile) {
      this.staffMService.addStaffMember(this.newStaffMember);
      this.newStaffMember = {
        fullName: '',
        username: '',
        email: '',
        mobile: ''
      };
    } else {
      alert('Please fill in all fields to add a staff member.');
    }
  }
  viewStaffDetails(staffMember: any) {
    this.selectedStaffMember = staffMember;
     const initialState = {
      staffMember: this.selectedStaffMember
    };
    this.bsModalRef = this.modalService.show(StaffModalComponent, {
      initialState
    });
  }

 deleteStaffMember(staffMember: any) {
    this.staffMService.deleteStaffMember(staffMember);
    this.staffMembers = this.staffMService.getStaffMembers();
  }
  closeModal() {
    this.bsModalRef.hide();
    this.selectedStaffMember = null;
  }
}
