import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Output() paisSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  list:any = []; 
  constructor(private http:HttpService) 
  {
    http.obtenerPaises().subscribe((e:any)=>{
      for(let i = 0; i<5;i++)
      {
        this.list.push(e[i]);
      }
  
    })
  }

  ngOnInit(): void {
  }
  seleccionado(objecto:any)
  {
    this.paisSeleccionado.emit(objecto);
  }

}
