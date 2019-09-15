import { Component, OnInit } from '@angular/core';
import {Mascota} from '../../modelos/mascota-model';
import { mascotaServicio } from '../mascota-servicio';
@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {
  mascotas: Mascota[] = [

  ];
  
  constructor(private _servicioMascota: mascotaServicio) 
  {

  }
  ngOnInit() {
    this._servicioMascota.getMascotas(1).subscribe(mascotas => this.mascotas = mascotas);
  }

}
