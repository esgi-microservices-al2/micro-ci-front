import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersContainer } from './users';
import {ProjectContainer} from './project';



const routes: Routes = [{
  path: '',
  component: UsersContainer
},
{
  path: '/project',
  component: ProjectContainer
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
