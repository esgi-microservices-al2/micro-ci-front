import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppContainer } from './app.container';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core';
import { UsersModule } from './users';
import { DetailComponent } from './detail/detail.component';
import {MaterialModule} from './shared/material';
import { BuildDetailComponent } from './build-detail/build-detail.component';


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
    FormsModule

  ],
  providers: [],
  bootstrap: [AppContainer]
})


export class AppModule { }

