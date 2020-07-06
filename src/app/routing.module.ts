import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersContainer} from './users';
import {AddMailAdresseComponent} from './adresse-mail';
import {AdresseMailContainerComponent} from './adresse-mail';
import { JobComponent } from './job/job.component';

const routes: Routes = [
  {path: '', component: UsersContainer},
  {path: 'mailConfig', component: AdresseMailContainerComponent},
  {path: 'refresh', component: AdresseMailContainerComponent},
  {path: 'job', component: JobComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
