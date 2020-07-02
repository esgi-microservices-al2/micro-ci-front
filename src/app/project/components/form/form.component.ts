import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { CdkAriaLive } from '@angular/cdk/a11y';
import {ProjectsService} from '../../services/project.service';

@Component({
  selector: 'ci-app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  addProjectForm: FormGroup;


  constructor(private projectService: ProjectsService, private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.addProjectForm = this.fb.group( {
      name: ['', [Validators.required, Validators.maxLength(80)]],
      owner: ['', [Validators.required, Validators.maxLength(800)]],
      source: ['', [Validators.required, Validators.maxLength(800)]],

    });
  }

  saveProject() {
    console.log(this.addProjectForm.controls.name.value);
    console.log(this.addProjectForm.controls.owner.value);
    console.log(this.addProjectForm.controls.source.value);

    const project = {
      name: this.addProjectForm.controls.name.value,
      owner: this.addProjectForm.controls.owner.value,
      source: this.addProjectForm.controls.source.value,

    };
    this.projectService.createProject(project);
  }
}
