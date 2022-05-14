import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  sessionStorage = window.sessionStorage;
  authToken: string | undefined | null;
  authStorageKey = 'auth_token';

  constructor() { }

  getAuthToken(): string | undefined | null {
    if (!this.authToken) {
      const authToken = this.sessionStorage.getItem(this.authStorageKey);
      this.authToken = authToken;
    }
    return this.authToken;
  }

  async setAuthToken(authToken: any) {
    console.log(authToken);
    this.sessionStorage.setItem(this.authStorageKey, authToken);
    this.authToken = authToken;
  }

  async clearAuthToken() {
    this.sessionStorage.removeItem(this.authStorageKey);
    this.authToken = undefined;
  }

  isLogged(): boolean {
    return !!this.getAuthToken();
  }
}