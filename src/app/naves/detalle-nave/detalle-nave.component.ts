import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nave, ServicioNavesService } from '../servicio-naves.service';

@Component({
  selector: 'app-detalle-nave',
  templateUrl: './detalle-nave.component.html',
  styleUrls: ['./detalle-nave.component.scss']
})
export class DetalleNaveComponent implements OnInit {

  nombreNave:string = "";
  nave:Nave | any = "";
  numeroNave:string = '';

  constructor(private rutaActiva: ActivatedRoute, private servicioNaves:ServicioNavesService) { }

  ngOnInit(): void {
    this.obtenerDatosNave();
  }

  obtenerDatosNave(){
    this.nombreNave = this.rutaActiva.snapshot.params["id"];

    // obtener Nave
    const result = this.servicioNaves.listaNaves.filter((nave)=>{
      return nave.name === this.nombreNave;
    });
    this.nave = result[0];

    // obtener numero (para foto)
    const urlSplit = this.nave.url.split("/");
    this.numeroNave = urlSplit[urlSplit.length-2];
  }


}
