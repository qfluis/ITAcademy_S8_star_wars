import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nave, ServicioNavesService } from '../servicio-naves.service';

@Component({
  selector: 'app-lista-naves',
  templateUrl: './lista-naves.component.html',
  styleUrls: ['./lista-naves.component.scss']
})
export class ListaNavesComponent implements OnInit {

  get listaNaves():Nave[] {
    return this.servicioNaves.listaNaves;
  }
  //listaNaves:Nave[]=[];

  constructor(private servicioNaves:ServicioNavesService, private router:Router) { 
    //console.log("constructor lista");
   }

  ngOnInit(): void {
    //console.log("iniciando lista");
   
    
    /*
    this.servicioNaves.getListaNaves$().subscribe(listaNaves => {
      console.log("Holiwi observable");
      this.listaNaves = listaNaves;
    }); */
    //console.log("Lista Naves Publica", this.servicioNaves.listaNavesPublica);

  }  

  detalleNave(nombreNave:string) {
    this.router.navigate(["/nave/"+nombreNave]);    
  }

}
