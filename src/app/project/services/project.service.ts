import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../model/project.model';
import {CreateProject} from '../model/createProject.model';

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

  deleteProject(id: number) {
    console.log('Delete : ' + id)
    const url = `http://localhost:8081/api/v1/projects/${id}`;
    return this.http.delete(url, {responseType: 'text'}
    ).subscribe(data => {
      console.log(data);
    });
  }

  createProject(project: CreateProject) {
    return this.http.post('http://localhost:8081/api/v1/projects/', project, {headers:
        {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }).subscribe( data => {
        console.log('Post réussi', data);
      },
      error => {
        console.log('Erreur de post', error);
      });
  }
}
