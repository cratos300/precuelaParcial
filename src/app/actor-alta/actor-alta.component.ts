import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Actor } from '../clases/actor';
import { AltaActorService } from '../services/alta-actor.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  unactor:Actor;
  @Input() mostrar:any;
  public formGroup!: FormGroup;
  constructor(private fb:FormBuilder,private actorservice:AltaActorService) 
  {
    this.unactor = new Actor();
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'nombre': ['',[Validators.required]],
      'apellido': ['',[Validators.required]],
      'edad': ['',[Validators.required, Validators.min(18),Validators.max(99)]],
      'email': ['',[Validators.required,Validators.pattern(/\w+@\w+\.+[a-z]/)]],
      'sexo': ['',[Validators.required]],

    });
  }
  public aceptar()
  {
    if(this.mostrar == undefined)
    {
      alert("Selecciona un pais");
    }
    else
    {
    this.unactor.nombre = this.formGroup.getRawValue().nombre;
    this.unactor.apellido = this.formGroup.getRawValue().apellido;
    this.unactor.email = this.formGroup.getRawValue().email;
    this.unactor.sexo = this.formGroup.getRawValue().sexo;
    this.unactor.edad = this.formGroup.getRawValue().edad;
    this.unactor.pais = this.mostrar;
      this.actorservice.create(this.unactor).then(()=>{
        console.log("mensaje enviado");
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Actor dado de alta!!',
        showConfirmButton: false,
        timer: 1500,
      })
      })

    }
}
}
