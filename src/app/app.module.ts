import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppContainer } from './app.container';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core';
import { UsersModule } from './users';
import { ProjectModule } from './project';
import {BuildDetailComponent} from './build-detail/build-detail.component';
import {DetailComponent} from './detail/detail.component';
import {MaterialModule} from './shared/material';
import {FormsModule} from '@angular/forms';


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
    ProjectModule
  ],
  providers: [],
  bootstrap: [AppContainer]
})


export class AppModule { }

