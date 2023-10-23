import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hod } from '../hod';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hod',
  templateUrl: './hod.component.html',
  styleUrls: ['./hod.component.css']
})
export class HodComponent implements OnInit {
  
  hodData: FormGroup;

  hod: Hod = {
    name: '',
    username: '',
    email: '',
    contactNumber: '',
    department: '',
    password: '',
    profileImage: '',
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
    profileImage: [''],
  } );
 
}
 registerHod() {
    if (this.hodData.valid) {
      this.registrationService.registerHod(this.hodData.value); 
      // console.log('Hod Registration Data:', this.hodData.value);
      this.router.navigate(['/login']); 
    }
  }

 handleImageInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          this.hod.profileImage = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }
  ngOnInit() {
  
  }
  

}
