import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppContainer } from './app.container';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core';
import { UsersModule } from './users';
import { ProjectModule } from './project';


// @ts-ignore
@NgModule({
  declarations: [
    AppContainer,
    DetailComponent,
    BuildDetailComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    UsersModule,
    MaterialModule,
    UsersModule,
    FormsModule,
    UsersModule,
    ProjectModule
  ],
  providers: [],
  bootstrap: [AppContainer]
})


export class AppModule { }

