import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PeriodicElement {
  Content: string;
  type: string;
  event: string;
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  private _jsonURL = 'assets/data.json';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.displayedColumns = ["Content", "type", "event"];
      this.dataSource = data;

    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  dataSource = [];
  displayedColumns: string[] = [];
}

