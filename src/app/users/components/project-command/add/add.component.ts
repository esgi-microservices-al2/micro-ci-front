import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { element } from 'protractor';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommandService } from 'src/app/users/services/command.service';
import { Project } from 'src/app/users/model/project.model';
import { Command } from 'src/app/users/model/command.model';
import { map, flatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'ci-app-command-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addForm: FormGroup;
  error: string;
  isError = false;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddComponent>,
    private commandService: CommandService,
    @Inject(MAT_DIALOG_DATA) private project: {project: Project, exist: boolean}
  ) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      program: ['', Validators.required],
      arguments: this.formBuilder.array([])
    });
  }

  addArgument() {

    this.arguments.push(this.formBuilder.control('', Validators.required));
  }

  removeArgument(index: number) {

    this.arguments.removeAt(index);
  }

  submit() {

    this.isError = false;

    if (this.addForm.invalid) {
      return;
    }

    const ob = this.project.exist
                  ? this.commandService.addCommand(this.addForm.value, this.project.project.id)
                  : this.commandService.createCommand(this.project.project.id)
                      .pipe(
                        tap(() => this.project.exist = true),
                        flatMap(() => this.commandService.addCommand(this.addForm.value, this.project.project.id))
                      );


    ob.subscribe(
        command => this.dialogRef.close(command),
        error => {
          this.isError = true;
          this.error = 'Cannot insert your data';
        }
      );
  }

  get arguments() {
    return this.addForm.get('arguments') as FormArray;
  }
}
