import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {

  constructor(private router:Router, private authService:AuthService) {}
    canActivate(): boolean {
      if (this.authService.loggedIn()) {
        return true;
      } else {
        this.router.navigateByUrl('/login');
        return false;
      }

   }
}
