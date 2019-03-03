import { Component, OnInit } from '@angular/core';
import { Pelicula } from './../../entities/pelicula';
//import { PELICULAS } from "../detalle/mock-peliculas";
import { PeliculasService } from "../../servicios/peliculas.service";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  // peliculas: Pelicula[] = PELICULAS;
  peliculas: Pelicula[];
  peliculaSeleccionada:number;

  constructor(private svePelicula:PeliculasService) { }

  ngOnInit() {
    this.obtenerPelicula();
  }

  editarPelicula(pelicula:number){

    this.peliculaSeleccionada = pelicula;
  }

  cancelarEdicion(estado){
    this.peliculaSeleccionada = estado;
  }

  obtenerPelicula(){
    this.svePelicula.getPeliculas().subscribe( data => {
      console.log(data); 
      this.peliculas = data;
    })
    
  }

}
