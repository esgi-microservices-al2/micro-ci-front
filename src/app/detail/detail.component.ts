import {Component, OnDestroy, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Build} from '../Build';
import {BUILS} from '../mock-build';


@Component({
  selector: 'ci-app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent  implements OnInit, OnDestroy {
  private json = 'assets/data.json';
  dataSource = [];
  builds = BUILS;

  selectedBuils: Build;

  onSelect(build: Build): void {
    this.selectedBuils = build;
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


