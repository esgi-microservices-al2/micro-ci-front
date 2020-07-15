import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PeriodicElement {
  Content: string;
  type: string;
  event: string;
}

@Component({
  selector: 'ci-app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  private jsonURL = 'http://micro-ci.westus2.cloudapp.azure.com:40503/event/build/build_3/events';
  dataSource = [];
  displayedColumns: string[] = [];

  public getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }


  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.displayedColumns = ['projectId', 'buildId', 'date', 'content' , 'type'];
      this.dataSource = data;

    });
  }

}

