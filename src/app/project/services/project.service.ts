import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../model/project.model';
import {CreateProject} from '../model/createProject.model';
import {map} from 'rxjs/operators';

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

  updateProject(project: Project, id: BigInteger) {
    return this.http.put(`http://localhost:8081/api/v1/projects/${id}`, project, {headers:
        {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }).subscribe( data => {
        console.log('Post réussi', data);
      },
      error => {
        console.log('Erreur de post', error);
      });
  }

  getOneProject(id: number): Observable<Project> {
    return this.http.get<Project>(`http://localhost:8081/api/v1/projects/${id}`, {observe: 'response'})
      .pipe(map(res => {
        console.log(res);
        return res.body;
      }));
}

  deleteProject(id: number) {
    console.log('Delete : ' + id);
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
