import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../model/project.model';

@Component({
  selector: 'ci-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {

  columns: string[] = ['name', 'url', 'public', 'runner', 'owner', 'source', 'delete'];

  @Input()
  projects: Project[];

  @Output()
  selectedProject: EventEmitter<Project> = new EventEmitter<Project>();

  selectProject(project: Project) {
    this.selectedProject.emit(project);
  }

}
