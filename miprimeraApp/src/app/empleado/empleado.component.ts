import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: "./empleado.component.html",
  //template: "<p>Aqui iria un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles: ["p{background-color:red}"]
})
export class EmpleadoComponent {

  nombre = "Juan";
  apellido = "Díaz";
  edad = 30;
  empresa = "Simetria";


  /*getEdad(){
    return this.edad;
  }
  */

  habilitacionCuadro = false;
  usuarioRegistrado = false;
  textoDeRegistro = "No hay nadie registrado";

  getRegistroUsuario(){
    this.usuarioRegistrado = false;
  }

  llamaEmpresa (value:String){
    return value;
  }

  comprobarEdad(edad:String){
    return edad;
  }

  setUsuarioRegistrado(){
    alert ("El usuario se acaba de registrar."); 
  }

  cambiarTextoDeRegistro(event:Event){
    //this.textoDeRegistro = "Ahora si que hay alquien registrado"
    if ((<HTMLInputElement>event.target).value == "si"){
      this.textoDeRegistro = "Ahora si que hay alguien registrado";
    }else if ((<HTMLInputElement>event.target).value == "no"){
      this.textoDeRegistro = "No hay nadie registrado";
    }
  }
}
