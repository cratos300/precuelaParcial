import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../clases/pelicula';
import { PeliculaAltaComponent } from '../pelicula-alta/pelicula-alta.component';
import { AltaPeliculaService } from '../services/alta-pelicula.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  id!:number;
  Nombre!:string;
  tipo:any;
  fechaDeEstreno:any;
  cantidadPublico:any;
  fotoPelicula:any;
  peliculaParMostrar!:Pelicula;
  listadoPrincipal:any = []; 

  constructor(private altapeli:AltaPeliculaService) 
  {
    altapeli.getAll().snapshotChanges().subscribe(e=>{
      for(let i=0;i<e.length;i++)
      {
        this.listadoPrincipal.push(e[i].payload.doc.data());
      }
    })
  }

  ngOnInit(): void {
  }

  PeliculaSeleccionada(peli:Pelicula)
  {
    this.peliculaParMostrar =  peli;
  }
}
