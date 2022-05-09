import { Component, Input, OnInit } from '@angular/core';
import { Actor } from '../clases/actor';
import { AltaActorService } from '../services/alta-actor.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  @Input() list:any = []; 

  constructor(act:AltaActorService)
  {
  }

  ngOnInit(): void {
  }
  seleccionado(data:any)
  {
    console.log("asd");
    
  }

}
