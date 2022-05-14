import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SessionsService } from './sessions.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private sessions: SessionsService) { }

    login(email: string, password: string): Observable<any> {
        const body = { email, password };
        return this.http.post('auth/login', body).pipe(
            tap((response: any) => this.sessions.setAuthToken(response.token))
        );
    }
}
