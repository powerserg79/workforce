import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfileGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    // query the server with the JWT token
    const verified = false;

    // redirect if not verified
    if (!verified) {
      this.router.navigate(['/seeker/register']);
    }

    console.log(next);

    return verified;
  }
}
