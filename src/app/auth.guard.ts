import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private loginService:LoginService) {}


canActivate(
    next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): any {
    if (this.loginService.isUserLoggedIn()) {
        const userStr = localStorage.getItem('user');
        if(userStr !== null) {
          const user = JSON.parse(userStr);
          return true
    }
    this.router.navigate(['/login/dashboard']);
      return false;
   
    }
     
    }
}
    // canActivate(
    //   next: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): boolean {
    //     if (this.loginService.isUserLoggedIn()){
    //         const userStr = localStorage.getItem('user');
            
    //     }
     
  
    //   if (userStr !== null) {
    //     const user = JSON.parse(userStr);
    //     // User is authenticated
    //     return true;
    //   }
  
    //   // User is not authenticated, redirect to login
    //   
    