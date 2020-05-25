import { Component, Input } from '@angular/core';
import { Project } from '../../model/project.model';

@Component({
  selector: 'ci-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {

  @Input() project: Project;

}
