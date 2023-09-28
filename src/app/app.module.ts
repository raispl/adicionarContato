import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importe os módulos de forms

import { AppComponent } from './app.component';
import { AdicionaContatoComponent } from './adiciona-contato/adiciona-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionaContatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Importe FormsModule para usar ngModel
    ReactiveFormsModule // Importe ReactiveFormsModule se pretende usar reactive forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
