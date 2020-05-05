import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../model/project.model';
import { Command } from '../model/command.model';
import {environment} from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private http: HttpClient) {}

  getProjectCommand(project: Project): Observable<[Command]> {
    return this.http.get<[Command]>(`${environment.configuration.commandApi}/job/${project.id}`).pipe(
      map(commands => commands.data.script)
    );
  }
}
