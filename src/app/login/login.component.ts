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


loginForm: FormGroup ;
loginError: string = '';

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

  login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.loginService.login(username, password).subscribe((loggedIn) => {
        if (loggedIn) {
          this.router.navigate(['login/dashboard']); // Successful login
        } else {
          this.loginError = 'Invalid username or password';
        }
      });
    } else {
      this.loginError = 'Please fill in all required fields.';
    }
  }
}


  // login() {
  //   if (this.loginForm.valid) {
  //     const { username, password } = this.loginForm.value;
  //     const loggedIn = this.loginService.login(username, password);
  
  //     if (loggedIn) {
  //       this.router.navigate(['login/dashboard']); // Successful login
  //     } else {
  //       this.loginError = 'Invalid username or password';
  //     }
  //   } else {
  //     this.loginError = 'Please fill in all required fields.';
  //   }
 




 
 
  