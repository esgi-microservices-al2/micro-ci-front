import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from '../model/mail.model';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  private baseUrl: string;
  constructor(private http: HttpClient) {

    //this.baseUrl = "http://localhost:8080/notification/";
    this.baseUrl = environment.apiUrl;

  }


  getAdressesMail(): Observable<Mail[]> {
    return this.http.get<Mail[]>(this.baseUrl + "addresses");
  }


  addAdresse(mail: Object): Observable<Object> {
    return this.http.post(this.baseUrl + "address", mail);
  }



}