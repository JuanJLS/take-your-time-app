import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('users');
  }

  getUser(id: string): Observable<any> {
    return this.http.get(`users/${id}`);
  }

  createUser(body: any): Observable<any> {
    return this.http.post('users/create', body);
  }

  getCurrentUser(): Observable<any> {
    return this.http.get('users/current-user');
  }

  updateUser(params: any): Observable<any> {
    const id = params.id;
    const body: any = {};
    if (params) {
      body.firstName = params.firstName;
      body.lastName = params.lastName;
      body.admin = params.admin;
      body.email = params.email;
    }
    return this.http.patch(`users/${id}`, body);
  }
}