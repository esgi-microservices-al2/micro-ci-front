import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../model/project.model';
import { Command } from '../model/command.model';
import { ProjectApi } from '../model/project.api.model';
import { Api as ApiModel } from '../model/api.model';
import {environment} from '../../../environments/environment';
import { map, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private http: HttpClient) {}

  getProjectCommand(project: Project): Observable<[Command]> {
    return this.http.get<ApiModel<ProjectApi>>(`${environment.configuration.commandApi}/jobs/${project.id}`)
      .pipe(
        map(commands => commands.data),
        map(commands => commands.script),
        timeout(8000)
      );
  }

  addCommand(project: Command, projectId: string): Observable<Command> {
    return this.http.post<ApiModel<Command>>(`${environment.configuration.commandApi}/jobs/${projectId}/command`, project)
      .pipe(
        map(command => command.data)
      );
  }

  createCommand(projectId: string): Observable<Command> {
    return this.http.post<ApiModel<Command>>(`${environment.configuration.commandApi}/jobs`, {project: projectId, script: []})
      .pipe(
        map(command => command.data)
      );
  }
}
