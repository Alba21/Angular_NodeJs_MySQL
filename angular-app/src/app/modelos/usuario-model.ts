export class Usuario{
    id: number;
    nickname: string;
    rol: number;
    constructor(id:number, nickname:string, rol:number){
        this.id = id;
        this.nickname = nickname;
        this.rol = rol;
    }
}
