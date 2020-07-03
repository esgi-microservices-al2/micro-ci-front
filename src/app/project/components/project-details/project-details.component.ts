import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../model/project.model';
import {ProjectsService} from '../../services/project.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ci-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project;
  updateFormProject: FormGroup;

  constructor(private projectService: ProjectsService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.project = null;
  }

  ngOnInit() {

    this.updateFormProject = this.fb.group( {
      name: ['', [Validators.required, Validators.maxLength(80)]],
      url: ['', [Validators.required, Validators.maxLength(80)]],
      owner: ['', [Validators.required, Validators.maxLength(800)]],
      runner: ['', [Validators.required, Validators.maxLength(800)]],
      source: ['', [Validators.required, Validators.maxLength(800)]],

    });

    this.projectService.getOneProject(this.route.snapshot.paramMap.get('id') as any as number).subscribe((data) => {
      console.log('Voici les données : ' + data);
      this.project = data;
    }, error1 => console.log(error1));
  }

  updateProject() {
    const project = {
      name: this.updateFormProject.controls.name.value,
      url: this.updateFormProject.controls.url.value,
      owner: this.updateFormProject.controls.owner.value,
      source: this.updateFormProject.controls.source.value,
      runner: this.updateFormProject.controls.runner.value,
    };
    this.projectService.updateProject(project, this.project._id);
  }
}
