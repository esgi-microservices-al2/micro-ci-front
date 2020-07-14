import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../model/project.model';
import {CreateProject} from '../model/createProject.model';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

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
    return this.http.get<Project[]>(`${environment.apiProject}projects`, {headers:
        {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
  }

  updateProject(project: Project, id: BigInteger) {
    return this.http.put(`${environment.apiProject}${id}`, project, {headers:
        {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }).subscribe( data => {
        console.log('Post réussi', data);
      },
      error => {
        console.log('Erreur de post', error);
      });
  }

  getOneProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${environment.apiProject}${id}`, {observe: 'response'})
      .pipe(map(res => {
        console.log(res);
        return res.body;
      }));
}

  deleteProject(id: number) {
    console.log('Delete : ' + id);
    const url = `${environment.apiProject}${id}`;
    return this.http.delete(url, {responseType: 'text'}
    ).subscribe(data => {
      console.log(data);
    });
  }

  createProject(project: CreateProject) {
    return this.http.post(`${environment.apiProject}`, project, {headers:
        {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }).subscribe( data => {
        console.log('Post réussi', data);
      },
      error => {
        console.log('Erreur de post', error);
      });
  }
}
