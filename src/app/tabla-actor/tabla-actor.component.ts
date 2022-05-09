import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {
  @Output() actorSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  @Input() list:any = []; 
  constructor() { }

  ngOnInit(): void {
  }
  seleccionado(data:any)
  {
    this.actorSeleccionado.emit(data);
  }

}
