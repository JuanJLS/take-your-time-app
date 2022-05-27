import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorktimeService {

  constructor(private http: HttpClient) { }

  getWorktimes(): Observable<any> {
    return this.http.get('users');
  }
  
  getWorktime(): Observable<any> {
    return this.http.get('users');
  }

  createWortime(body: any): Observable<any> {
    return this.http.post('worktime/create', body);
  }

  getCurrentUser(): Observable<any> {
    return this.http.get('users/current-user');
  }
}