import { Injectable } from '@angular/core';
import { Mascota } from '../modelos/mascota-model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class mascotaServicio{

    constructor(private http: HttpClient){

    }

    getMascotas(id: number): Observable<Mascota[]> { 
        return this.http.get<Mascota[]>('http://localhost:3000/mascotas/'+id);  
    }
    
    addMascota(nombre: string, desc: string){
        var data : Mascota = new Mascota(0,nombre,1,true,desc);
        return this.http.post<Mascota>('http://localhost:3000/agregarMascota',data,{
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        }).pipe(catchError(err => {
            console.error('Error: '+err);
            return throwError(err);
        }));
    }
}

