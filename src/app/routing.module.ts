import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersContainer } from './users';
import {ProjectContainer} from './project';
import {DetailComponent} from './detail/detail.component';
import {FormComponent} from './project/components/form/form.component';
import {ProjectDetailsComponent} from './project/components/project-details/project-details.component';
import {AddMailAdresseComponent} from './adresse-mail';
import {AdresseMailContainerComponent} from './adresse-mail';

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
    path: 'addProject',
    component: FormComponent
  },
  {
    path: 'project/:id',
    component: ProjectDetailsComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'mailConfig',
    component: AdresseMailContainerComponent
  },
  {
    path: 'refresh',
    component: AdresseMailContainerComponent}                      
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
