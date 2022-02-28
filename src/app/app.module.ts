import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavesModule } from './naves/naves.module';
import { ServicioNavesService } from './naves/servicio-naves.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavesModule
  ],
  providers: [ServicioNavesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
