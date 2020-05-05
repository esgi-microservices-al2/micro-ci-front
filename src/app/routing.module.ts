import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersContainer } from './users';
import {DetailComponent} from './detail/detail.component';


const routes: Routes = [{
  path: '',
  component: UsersContainer,
},

  { path: 'detail',
    component: DetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
