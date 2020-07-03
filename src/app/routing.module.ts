import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersContainer } from './users';
import {DetailComponent} from './detail/detail.component';

const detailRoutes = [
  {
    path: 'detail/:id',
    component: DetailComponent
  }
];

const routes: Routes = [{
  path: '',
  component: UsersContainer,
  children: [
    // Mobile 'Detail' Routes
    // are children of the master...
    ...detailRoutes
  ]
},
  ...detailRoutes,


  { path: 'detail',
    component: DetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
