import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

 constructor() { }

  getTotalLeavesApplied(): number {
    
    return 20; 
  }
  getTotalApprovedLeaves(): number {
    
    return 15; 
  }

  getTotalRejectedLeaves(): number {
   
    return 5; 
  }

}
