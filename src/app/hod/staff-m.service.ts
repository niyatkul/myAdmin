import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffMService {

 private localStorageKey = 'staffMembers';
 private nextId = 1;
  constructor() { }

  getStaffMembers(): any[] {
    const staffMembers = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    return staffMembers;
  }

  addStaffMember(newMember: any) {
    const staffMembers = this.getStaffMembers();
    staffMembers.push(newMember);
    localStorage.setItem(this.localStorageKey, JSON.stringify(staffMembers));
  }

  deleteStaffMember(member: any) {
    const staffMembers = this.getStaffMembers();
    const index = staffMembers.findIndex((item: any) => item.id === member.id);

    if (index !== -1) {
      staffMembers.splice(index, 1);
      localStorage.setItem(this.localStorageKey, JSON.stringify(staffMembers));
    }
  }
}
