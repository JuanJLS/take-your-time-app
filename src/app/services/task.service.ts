import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: any | undefined;

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get('tasks');
  }

  createTask(body: any): Observable<any> {
    return this.http.post('tasks/create', body);
  }
  async findTaskById(taskId: string) {
    return await this.http.get(`tasks/${taskId}`).toPromise();
  }

  
}