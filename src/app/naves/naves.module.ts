import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaNavesComponent } from './lista-naves/lista-naves.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListaNavesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ListaNavesComponent
  ]
})
export class NavesModule { }
