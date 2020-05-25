import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { UsersContainer } from './container/users.container';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ListComponent as CommandListComponent } from './components/project-command/list/list.component';
import { AddComponent as CommandAddComponent, AddComponent } from './components/project-command/add/add.component';


@NgModule({
  declarations: [
    UsersContainer,

    UsersListComponent,
    UserDetailsComponent,
    CommandListComponent,
    AddComponent
  ],
  imports: [
    SharedModule
  ]
})
export class UsersModule {
}
