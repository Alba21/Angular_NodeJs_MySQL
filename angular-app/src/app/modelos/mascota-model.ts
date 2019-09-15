export class Mascota{
    id: number;
    nombre: string;
    id_duenio: number;
    feliz: boolean;
    descripcion?: string;
    constructor(id:number, name:string, id_duenio:number,feliz:boolean, descripcion:string){
        this.id = id;
        this.nombre = name;
        this.id_duenio = id_duenio;
        this.feliz = feliz;
        this.descripcion = descripcion;
    }
}



