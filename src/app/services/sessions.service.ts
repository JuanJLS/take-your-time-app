import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor() { }

  isLogged(): boolean {
    return false;
  }
}
