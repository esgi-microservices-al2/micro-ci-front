import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) {
    const optionRequete = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      })
    };
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('http://localhost:8081/api/v1/projects/projects', {headers:
        {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
  }
}
