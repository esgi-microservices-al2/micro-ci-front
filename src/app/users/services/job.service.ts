import { Injectable } from '@angular/core';
import { Job } from '../model/job.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) {
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('http://localhost:8080/job');
  }
}
