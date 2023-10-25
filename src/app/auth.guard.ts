import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
 constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.loginService.isAuthenticated()) {
      this.router.navigate(['/login/dashboard']);
      return true; //if user is authenticated and redirected to dashboard page
    } else {
      this.router.navigate(['/login']);
      return false; // User is not authenticated and is redirected to the login page
    }
  }
}
    
     
  
    
  
    