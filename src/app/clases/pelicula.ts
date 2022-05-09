import { Actor } from "./actor";

export class Pelicula {
    id:any;
    nombre:any;
    tipo:any;
    fechaEstreno:any;
    cantidadPublico:any;
    fotoPelicula:any;
    actor:Actor;
    constructor()
    {
        this.id = 0;
        this.nombre = "";
        this.tipo = "";
        this.fechaEstreno = "";
        this.cantidadPublico = "";;
        this.fotoPelicula = "";;
        this.actor = new Actor();
    }    
}
