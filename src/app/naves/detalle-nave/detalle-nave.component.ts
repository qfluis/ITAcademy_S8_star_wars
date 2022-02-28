import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioNavesService } from '../servicio-naves.service';

@Component({
  selector: 'app-detalle-nave',
  templateUrl: './detalle-nave.component.html',
  styleUrls: ['./detalle-nave.component.scss']
})
export class DetalleNaveComponent implements OnInit {

  idNave:string = "";

  constructor(private rutaActiva: ActivatedRoute, private servicioNaves:ServicioNavesService) { }

  ngOnInit(): void {
    this.idNave = this.rutaActiva.snapshot.params["id"];
    //console.log(this.servicioNaves.)
    //console.log(this.rutaActiva.snapshot.params["id"]);
  }

}
