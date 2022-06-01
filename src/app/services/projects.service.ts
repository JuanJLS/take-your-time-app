import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    return this.http.get('projects');
  }

  createProject(body: any): Observable<any> {
    return this.http.post('projects/create', body);
  }

  updateProject(params: any): Observable<any> {
    const id = params.id;
    const body: any = {};
    if (params.name) {
      body.name = params.name;
    }
    return this.http.patch(`projects/${id}`, body);
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(`projects/${id}`);
  }

  getProject(id: string): Observable<any> {
    return this.http.get(`projects/${id}`);
  }
}
