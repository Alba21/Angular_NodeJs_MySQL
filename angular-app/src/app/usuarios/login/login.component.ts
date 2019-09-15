import { Component, OnInit } from '@angular/core';
import { LoginServicio } from '../login-servicio';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servicioLogin : LoginServicio, private _router : Router) { }
  ngOnInit() {
  }
  iniciarSesion(crearForm: NgForm): void{
    var nickname: string = crearForm.value.nickname;
    var password: string = crearForm.value.password;
    this.servicioLogin.login(nickname,password).subscribe(
      res =>{
        var respuesta: string = res["inicio"];
        console.log("respuesta"+respuesta);
        if(respuesta == "1"){
          this._router.navigate(['lista_mascotas']);
        }else{
          alert("Usuario o contraseña no valido");
          crearForm.reset();
          this._router.navigate(['login']);

        }
      }, (error) =>{
        console.error(error);
      },
      
    );
  }

  cambiarComponente(){
    this._router.navigate(['lista_mascotas']);
  }

}
