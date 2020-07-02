import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CdkAriaLive } from '@angular/cdk/a11y';

@Component({
  selector: 'ci-app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    // tslint:disable-next-line: no-string-literal
    const name = form.value['name'];
 }

}
