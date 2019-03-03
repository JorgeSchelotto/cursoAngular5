import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pelicula } from './../../entities/pelicula';
import { PeliculasService } from "./../../servicios/peliculas.service";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input()
  idPelicula:number;
  pelicula: Pelicula;

  @Output()
  cancelar = new EventEmitter();
  constructor(private svePeliculas:PeliculasService) { }

  ngOnInit() {
    console.log(this.idPelicula);
    this.getPeliculaXId();
  }

  cancelarEdicion(){
    this.cancelar.emit(false);
  }

  guardarCambios(){
      console.log("Datos a enviar.");
      console.log(this.idPelicula);
  }

  getPeliculaXId(){
    this.svePeliculas.buscarPeliculaPorId(this.idPelicula).subscribe(pelicula => this.pelicula = pelicula )
  }

}
