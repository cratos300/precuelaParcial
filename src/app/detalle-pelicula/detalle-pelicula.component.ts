import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() detallePelicula!:Pelicula;
  constructor() { }

  ngOnInit(): void {
  }

}
