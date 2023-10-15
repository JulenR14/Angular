import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {

  @Output() caracteristicasEmpleado = new EventEmitter<String>(); 

  agregaCaracteristicas(value: string){
    this.caracteristicasEmpleado.emit(value);
  }

}
