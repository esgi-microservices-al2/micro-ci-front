import { Component, OnInit } from '@angular/core';
import { MailService } from '../../services/mail.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Mail } from '../../model/mail.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'ci-liste-mail-adresse',
  templateUrl: './liste-mail-adresse.component.html',
  styleUrls: ['./liste-mail-adresse.component.scss']
})
export class ListeMailAdresseComponent implements OnInit {

  private destroy$: Subject<boolean> = new Subject<boolean>();
  columns: string[] = ['idmail'];

  mail: Mail = new Mail();
  mails: Mail[];
  submitted = false;
  constructor(private mailService: MailService) {
  }



  ngOnInit(): void {
    this.getAdresses();
  }



  getAdresses() {
    this.mailService.getAdressesMail()
      .subscribe(
        mails => this.mails = [...mails],
        error => console.error(error)
      );
  }



}
