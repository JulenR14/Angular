import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "";
  apellido = "";

  titulo = 'Registro de Usuarios';
  mensaje = "";
  registrado = false;

  entradas: any[];

constructor(){
  this.entradas=[
    {titulo:"Python cada día más presente"},
    {titulo:"Java presente desde hace mas de 20 años"},
    {titulo:"JavaScript cada vez mas potente"},
    {titulo:"Kotlin potencia para tus apps"},
    {titulo:"Donde quedo Pascal"}
  ]
}

  registrarUsuario(){
    this.registrado = true;
    this.mensaje = "Usuario registrado con exito con nombre " + this.nombre + " y apellido " + this.apellido;
  }
}
