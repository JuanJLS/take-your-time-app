import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionsService } from '../services/sessions.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private sessions: SessionsService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const currentUserLogged = await this.sessions.isLogged();

    if (!currentUserLogged) { this.router.navigateByUrl('/login'); }
    return !!currentUserLogged;
  }
}
