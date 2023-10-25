import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HOD } from '../hod';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hod',
  templateUrl: './hod.component.html',
  styleUrls: ['./hod.component.css']
})
export class HodComponent implements OnInit {
 role: string = 'HOD';
  hodData: FormGroup;

  hod: HOD = {
    name: '',
    username: '',
    email: '',
    contactNumber: '',
    department: '',
    password: '',
     role: ''
   
  };

    constructor(
    private fb: FormBuilder,
    private router: Router,
    private registrationService:RegistrationService) 

    {
    this.hodData = this.fb.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contactNumber: ['', Validators.required],
    department: ['', Validators.required],
    password: ['', Validators.required],
    role: ['hod'],
  } );
 
}
registerHod() {
  if (this.hodData.valid) {
    this.registrationService.registerHod(this.hodData.value);
    console.log('Hod Registration Data:', this.hodData.value);
    this.router.navigate(['/login']);
  }
}
  // handleImageInput(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       if (e.target) {
  //         // Update your data with the profile image if needed
  //         this.hodData.patchValue({
  //           profileImage: e.target.result as string,
  //         });
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }
  ngOnInit() {
  
  }
  

}
