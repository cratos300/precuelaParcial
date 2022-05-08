export class Pelicula {
    id:any;
    nombre:any;
    tipo:any;
    fechaEstreno:any;
    cantidadPublico:any;
    fotoPelicula:any;
    constructor(id:any,nombre:any,tipo:any,fecha:any,cantidad:any,fotopelicula:any)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fecha;
        this.cantidadPublico = cantidad;
        this.fotoPelicula = fotopelicula;
    }    
}
