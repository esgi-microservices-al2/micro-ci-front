import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { ProjectContainer } from './container/project.container';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';


@NgModule({
  declarations: [
    ProjectContainer,

    ProjectsListComponent,
    ProjectDetailsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProjectModule { }
