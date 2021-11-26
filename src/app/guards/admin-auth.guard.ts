import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthMessages } from '../constants/auth-messages';
import { AuthService } from '../services/auth.service';
import { SweetAlertService } from '../services/sweet-alert.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private sweetAlertService: SweetAlertService){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAdmin().pipe(
      map(response => {
        return true;
      }),
      catchError(error => {
        this.router.navigateByUrl("/login")
        this.sweetAlertService.error(AuthMessages.notAdmin);
        return of(false);
      })
    )

  }
  
}
