import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'ci-app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  private json = 'assets/data.json';
  dataSource = [];
  displayedColumns: string[] = [];
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.displayedColumns = ['Content', 'type', 'event'];
      this.dataSource = data;

    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.json);
  }


}
export interface PeriodicElement {
  Content: string;
  type: string;
  event: string;
}

