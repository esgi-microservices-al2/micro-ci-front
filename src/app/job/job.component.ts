import { Component, OnInit } from '@angular/core';
import { Job } from '../users/model/job.model';

@Component({
  selector: 'ci-app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  // joblist: Job[];

  joblist = [
    {
      cronexpression: 'test',
      idproject: 1,
      name: 'test',
    },
  ];

  constructor() { }

  ngOnInit(): void {
    /* this.jobService.getJobs()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        job => this.joblist = [...jobs],
        error => console.error(error)
      ); */
  }
}
