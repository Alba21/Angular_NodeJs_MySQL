import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaMascotasComponent } from './mascotas/lista-mascotas/lista-mascotas.component';
import { FormCrearMascotaComponent } from './mascotas/form-crear-mascota/form-crear-mascota.component';
import { mascotaServicio } from './mascotas/mascota-servicio';
import { LoginComponent } from './usuarios/login/login.component';
import { LoginServicio } from './usuarios/login-servicio';
import { HttpClient, HttpClientModule } from '@angular/common/http';


const Rutas: Routes = [
  
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'lista_mascotas', component:ListaMascotasComponent
  },
  {
    path: 'crear_mascota', component:FormCrearMascotaComponent
  },
  {
    path: 'login', component:LoginComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ListaMascotasComponent,
    FormCrearMascotaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(Rutas),
    FormsModule,
    HttpClientModule
    ],
  providers: [ mascotaServicio, LoginServicio, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
