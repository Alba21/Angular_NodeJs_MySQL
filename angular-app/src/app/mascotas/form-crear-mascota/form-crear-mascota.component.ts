import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { mascotaServicio } from '../mascota-servicio';

@Component({
  selector: 'app-form-crear-mascota',
  templateUrl: './form-crear-mascota.component.html',
  styleUrls: ['./form-crear-mascota.component.css']
})
export class FormCrearMascotaComponent implements OnInit {
  constructor(private _mascotaServicio: mascotaServicio, private _router : Router) 
  { 
  }
  ngOnInit() {
  }
  guardarMascota(datos_mascota : NgForm ) : void{
    this._mascotaServicio.addMascota(datos_mascota.value.nombre, datos_mascota.value.descp)
      .subscribe((result) =>{
        console.log(result);
      });
    this._router.navigate(['lista_mascotas']);
  }
}
