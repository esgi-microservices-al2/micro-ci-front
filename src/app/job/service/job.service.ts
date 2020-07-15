import { Injectable } from '@angular/core';
import { Job } from '../../job/model/job.model';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  job: any;
  url: string = 'http://localhost:8080/job';

  constructor(private http: HttpClient) {
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('http://localhost:8080/job');
  }

  addJob(nameInput: string, cronExpressionInput: string, idProjectInput: string) {
    const body = { cronexpression: cronExpressionInput, idproject: idProjectInput, name: nameInput }
    this.http.post<Job>('http://localhost:8080/job', body).subscribe();
  }

}
