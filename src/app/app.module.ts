import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppContainer} from './app.container';
import {RoutingModule} from './routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core';
import {UsersModule} from './users';
import {AdresseMailModule} from './adresse-mail';
import { JobComponent } from './job/job.component';


@NgModule({
  declarations: [
    AppContainer,
    JobComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    UsersModule,
    AdresseMailModule,
  ],
  exports: [
    AppContainer
  ],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule {
}
