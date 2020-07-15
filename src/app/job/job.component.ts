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

  /*joblist = [
    {
      cronexpression: 'test',
      idproject: 1,
      name: 'test',
    },
  ];*/

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
      this.getJobList();
    /*
    this.jobService.getJobs()
      // .pipe(takeUntil(this.destroy$))
      .subscribe(
        job => this.joblist = [...job],
        error => console.error(error)
      );*/
  }

  getJobList() {
    this.jobService.getJobs()
      .subscribe(res => {
        this.joblist = res;
        /* for (var job of this.joblist) {
          if (job.deletedAt == null) {
            job.deletedAt = 'Never';
          }
        } */ 
        console.log(res);
      });
  }

  test() {

    console.log('success');
  }
}
