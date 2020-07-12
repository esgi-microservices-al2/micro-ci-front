import {Component, OnDestroy, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Build} from '../Build';
import {EVENTS} from '../mock-build';
import {Events} from '../Events';


@Component({
  selector: 'ci-app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent  implements OnInit, OnDestroy {
  private json = 'assets/data.json';
  dataSource = [];
  events = EVENTS;

  selectedBuils: Events;

  onSelect(event: Events): void {
    this.selectedBuils = event;
  }


  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.dataSource = data;
     // console.log(this.dataSource)
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.json);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }


}


