import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdresseMailContainerComponent} from './container/adresse-mail-container/adresse-mail-container.component';
import {AddMailAdresseComponent} from './components/add-mail-adresse/add-mail-adresse.component';
import {SharedModule} from '../shared';
import {ListeMailAdresseComponent} from './components/liste-mail-adresse/liste-mail-adresse.component';

/* import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; */

@NgModule({
  declarations: [AdresseMailContainerComponent, AddMailAdresseComponent, ListeMailAdresseComponent],
  imports: [
    CommonModule,
    SharedModule
    /*    MatCardModule,
       MatFormFieldModule,
       FormsModule,
       ReactiveFormsModule */
  ]
})
export class AdresseMailModule {
}
