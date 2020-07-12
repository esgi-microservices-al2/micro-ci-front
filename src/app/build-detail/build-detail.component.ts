import {Component, Input, OnInit} from '@angular/core';
import {Events} from '../Events';

@Component({
  selector: 'ci-app-build-detail',
  templateUrl: './build-detail.component.html',
  styleUrls: ['./build-detail.component.scss']
})
export class BuildDetailComponent implements OnInit {
  @Input() build: Events;

  constructor() { }

  ngOnInit() {
  }


}
