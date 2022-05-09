import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from '../clases/actor';
import { Pelicula } from '../clases/pelicula';
import { AltaPeliculaService } from '../services/alta-pelicula.service';
import { SubirimagenService } from '../services/subirimagen.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  public formGroup!: FormGroup;
  eventoGeneral:any;
  imagenes:any[] = [];
  unaPelicula!:Pelicula;
  @Input() actorr!:Actor;

  
  constructor(private fb:FormBuilder,private storageService:SubirimagenService,private altapeli:AltaPeliculaService) 
  {
    this.unaPelicula = new Pelicula()
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'nombre': ['',[Validators.required]],
      'tipo': ['',[Validators.required]],
      'fecha_estreno': ['',[Validators.required, Validators.min(18),Validators.max(99)]],
      'cantidad_publico': ['',[Validators.required]],
      'inputFile': ['',[Validators.required]],

    });
  }
  aceptar()
  {
    if(this.actorr == undefined )
    {
      alert("FALTA INICIALIZAR");
    }
    else
    {
      let archivos = this.eventoGeneral.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(archivos[0]);  
    
    reader.onloadend = ()=>{
    this.imagenes.push(reader.result);

    this.storageService.subirImagen(Date.now,reader.result).then(ese=>{
      this.unaPelicula.nombre = this.formGroup.getRawValue().nombre;
      this.unaPelicula.tipo = this.formGroup.getRawValue().tipo;
      this.unaPelicula.fechaEstreno = this.formGroup.getRawValue().fecha_estreno;
      this.unaPelicula.cantidadPublico = this.formGroup.getRawValue().cantidad_publico;
      this.unaPelicula.fotoPelicula = ese;
      this.unaPelicula.actor = this.actorr;
      this.altapeli.create(this.unaPelicula).then((e:any)=>{
        alert("Pelicula de alta correctamente!"); 
      })
      
    })
 }
    }

  }
  cargarImagen(event:any)
{
  this.eventoGeneral = event;
}

}
