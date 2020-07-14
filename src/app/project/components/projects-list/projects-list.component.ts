import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../model/project.model';
import { OnInit } from '@angular/core';
import {ProjectsService} from '../../services/project.service';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'ci-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  columns: string[] = ['name', 'url', '_public', 'runner', 'owner', 'source', 'delete'];

  @Input()
  projects: Project[];

  @Output()
  selectedProject: EventEmitter<Project> = new EventEmitter<Project>();


  constructor(private projectService: ProjectsService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  deleteProject(id: number) {
    console.log('Je suis ici');
    this.projectService.deleteProject(id);
  }


  selectProject(project: Project) {
    this.selectedProject.emit(project);
  }


}
