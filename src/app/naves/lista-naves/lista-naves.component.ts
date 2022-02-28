import { Component, OnInit } from '@angular/core';
import { Nave, ServicioNavesService } from '../servicio-naves.service';

@Component({
  selector: 'app-lista-naves',
  templateUrl: './lista-naves.component.html',
  styleUrls: ['./lista-naves.component.scss']
})
export class ListaNavesComponent implements OnInit {

  listaNaves:Nave[]=[];

  constructor(private servicioNaves:ServicioNavesService) { }

  ngOnInit(): void {
    this.servicioNaves.getListaNaves$().subscribe(listaNaves => {
      this.listaNaves = listaNaves;
    });

  }  

}
