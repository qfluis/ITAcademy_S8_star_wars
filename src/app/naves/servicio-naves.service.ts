import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable, Subject } from 'rxjs';

export interface ListaNaves {
  count:    number;
  next:     string;
  previous: null;
  results:  Nave[];
}

export interface Nave {
  name:                   string;
  model:                  string;
  manufacturer:           string;
  cost_in_credits:        string;
  length:                 string;
  max_atmosphering_speed: string;
  crew:                   string;
  passengers:             string;
  cargo_capacity:         string;
  consumables:            string;
  hyperdrive_rating:      string;
  MGLT:                   string;
  starship_class:         string;
  pilots:                 string[];
  films:                  string[];
  created:                Date;
  edited:                 Date;
  url:                    string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicioNavesService {

  public listaNaves:Nave[] =[];
  //private listaNaves$: Subject<Nave[]>;
  private pagina:number;
  private resultadosPagina:number = 10;
  private paginas:number = 0;
  public totalNaves:number = 0;
  public allShipsCharged:boolean = false;
  
  constructor(private http:HttpClient) {
    this.pagina = 1
    //this.listaNaves$ = new Subject(); 
    this.obtenerListaNaves(this.pagina);
  }

  /*
  getListaNaves$(): Observable<Nave[]> {
    return this.listaNaves$.asObservable();
  }*/  

  obtenerListaNaves(page:number){
    this.http.get<ListaNaves>(`https://swapi.dev/api/starships/?page=${page}`)
      .subscribe((resp:ListaNaves)=> {
        this.listaNaves = this.listaNaves.concat(resp.results);
        this.paginas = resp.count / this.resultadosPagina   
        this.totalNaves = resp.count;   
        console.log(this.paginas);
        console.log(this.listaNaves);
        //this.listaNaves$.next(this.listaNaves);          
      });    
  }

  nextPage() {
    if(!this.allShipsCharged) {
      this.pagina++;
      this.obtenerListaNaves(this.pagina);
    } 
    if (this.pagina > this.paginas){
      this.allShipsCharged = true;
    }
  }


}
