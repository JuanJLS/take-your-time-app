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
    return this.http.get('task');
  }

  createTask(body: any): Observable<any> {
    return this.http.post('tasks/create', body);
  }
  //It receive a lists of ids, and renturn the related task's information
  async findTaskById(taskId: string) {
    return await this.http.get(`tasks/${taskId}`).toPromise();
  }
}