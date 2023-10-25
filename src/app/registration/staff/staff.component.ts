import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Staff } from '../staff';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
 
  role: string = '';
  staffData: FormGroup; 

  staff: Staff = {
    name: '',
    username: '',
    email: '',
    contactNumber: '',
    password: '',
    role: ''
  };

    constructor(
    private fb: FormBuilder,
    private registrationService:RegistrationService,
    private router:Router
    ) 
    {
    this.staffData = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      password: ['', Validators.required],
      role: ['staff'],
    });
  }

  registerStaff() {
    if (this.staffData.valid) {
      this.registrationService.registerStaff(this.staffData.value);
      console.log('Staff Registration Data:', this.staffData.value);
      this.router.navigate(['/login']);
    }
  }


ngOnInit(): void {
 }
}

