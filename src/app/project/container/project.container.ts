import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectsService } from '../services/project.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Project } from '../model/project.model';

@Component({
  templateUrl: './project.container.html'
})
export class ProjectContainer implements OnInit, OnDestroy {

  project: Project[];
  selectedProject: Project;

  // Manage Observable cancellation when component is destroyed : https://alligator.io/angular/takeuntil-rxjs-unsubscribe/
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.projectService.getProjects()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        project => this.project = [...project],
        error => console.error(error)
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  getSelectedProject(event: Project): void {
    this.selectedProject = event;
  }

}
