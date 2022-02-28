import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaNavesComponent } from './lista-naves/lista-naves.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalleNaveComponent } from './detalle-nave/detalle-nave.component';
import { ServicioNavesService } from './servicio-naves.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListaNavesComponent,
    DetalleNaveComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    ListaNavesComponent,
    DetalleNaveComponent
  ],
  providers: [
    ServicioNavesService
  ]
})
export class NavesModule { }
