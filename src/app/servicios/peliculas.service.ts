import { Injectable } from '@angular/core';
import { PELICULAS } from "../componentes/detalle/mock-peliculas";
import{ Pelicula } from "../entities/pelicula";
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor() { }

  getPeliculas() : Observable<Pelicula[]>{
    return new Observable((observer: Observer<Pelicula[]>)=>{
      observer.next(PELICULAS);
    });
  }

  buscarPeliculaPorId(id:number): Observable<Pelicula>{
    return new Observable((observer : Observer<Pelicula>)=>{
      const result = PELICULAS.find(pelicula => pelicula.id_pelicula===id);
      observer.next(result);
      observer.complete();
    })

  }
}
