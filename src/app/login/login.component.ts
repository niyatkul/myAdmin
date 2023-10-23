import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

 credentials = {
    username: '',
    password: '',
  };
  
loginForm: FormGroup ;


  constructor(private fb: FormBuilder,
     private loginService: LoginService,
     private router: Router) { 

      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
    }
    
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


    
     }
  
 
 
  