import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { element } from 'protractor';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-command-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddComponent>
  ) { }

  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
      programm: ['', Validators.required],
      arguments: this.formBuilder.array([])
    })
  }

  addArgument() {

    this.arguments.push(this.formBuilder.control('', Validators.required));
  }

  removeArgument(index: number){

    this.arguments.removeAt(index);
  }

  submit() {

    if(this.addForm.invalid)
      return;

    console.log(this.addForm.value);
    this.dialogRef.close();
  }

  get arguments() {
    return this.addForm.get('arguments') as FormArray;
  }
}
