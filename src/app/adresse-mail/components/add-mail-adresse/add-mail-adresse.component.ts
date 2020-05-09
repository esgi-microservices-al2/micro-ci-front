import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MailService } from '../../services/mail.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Mail } from '../../model/mail.model';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-mail-adresse',
  templateUrl: './add-mail-adresse.component.html',
  styleUrls: ['./add-mail-adresse.component.scss']
})
export class AddMailAdresseComponent implements OnInit {


  newMail: Mail = new Mail();
  mails: Mail[];
  submitted = false;

  constructor(private mailService: MailService,
    private router: Router,
    public _location: Location) {
  }
  emailTab = new Array();

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  mail: string;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }




  save() {
    this.mailService.addAdresse(this.newMail)
      .subscribe(data => console.log("data", data), error => console.log(error));
    this.newMail = new Mail();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
    this.gotoList();
  }


  gotoList() {
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this._location.path()));
      this.router.navigate([decodeURI(this._location.path())]);
    });
  }


}
