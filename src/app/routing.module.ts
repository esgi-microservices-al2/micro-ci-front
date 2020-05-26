import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersContainer } from './users';
import {ProjectContainer} from './project';
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
    ...detailRoutes
  ]
},
  ...detailRoutes,
{
  path: 'project',
  component: ProjectContainer
},
  {
    path: 'detail',
    component: DetailComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
