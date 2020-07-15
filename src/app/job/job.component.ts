import { Component, OnInit } from '@angular/core';
import { Job } from './model/job.model';
import { JobService } from './service/job.service';

@Component({
  selector: 'ci-app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  joblist: Job[];
  job: Job;
  nameInput: string;
  cronExpressionInput: string;
  idProjectInput: string;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.getJobList();
  }

  getJobList() {
    this.jobService.getJobs()
      .subscribe(res => {
        this.joblist = res;
        console.log(res);
      });
  }

  addJob() {
    this.jobService.addJob(this.nameInput, this.cronExpressionInput, this.idProjectInput);
  }
}
