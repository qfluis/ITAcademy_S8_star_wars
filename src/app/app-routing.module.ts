import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetalleNaveComponent } from './naves/detalle-nave/detalle-nave.component';
import { ListaNavesComponent } from './naves/lista-naves/lista-naves.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch:'full'},
  {path: 'naves', component:ListaNavesComponent},
  {path: 'nave/:id', component: DetalleNaveComponent},
  {path:'**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
