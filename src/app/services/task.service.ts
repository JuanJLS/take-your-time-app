import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get('task');
  }

  createTask(body: any): Observable<any> {
    return this.http.post('tasks/create', body);
  }
}