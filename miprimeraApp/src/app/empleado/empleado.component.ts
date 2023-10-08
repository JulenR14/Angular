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
  //empresa = "Simetria";

  /*getEdad(){
    return this.edad;
  }
  */

  llamaEmpresa (value:String){
    return value;
  }

  comprobarEdad(edad:String){
    return edad;
  }
}
