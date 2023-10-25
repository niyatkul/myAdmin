import { Injectable } from '@angular/core';
import { Observable, map, of, switchMap,pipe} from 'rxjs';
import { RegistrationService } from '../registration/registration.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private registrationService: RegistrationService) {}

  
login(username: string, password: string): Observable<boolean> {
    // Ensure getRegistrationData() returns an Observable, and use the 'of' function
    return this.registrationService.getRegistrationData().pipe(
      map((data: any) => {
        const user = data.users.find((u: any) => u.username === username && u.password === password);
        if (user) {
          localStorage.setItem('userRole', user.role);
          localStorage.setItem('username', user.username);
          return true;
        } else {
          return false;
        }
      })
    );
  }


  logout() {
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('userRole');
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  getLoggedInUsername(): string | null {
    return localStorage.getItem('username');
  }
}






