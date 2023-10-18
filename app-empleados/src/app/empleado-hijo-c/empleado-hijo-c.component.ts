import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {

  @Input() empleadoDeLista: Empleado;
  @Input() indice: number;

  constructor(private servicioEmpleado: ServicioEmpleadosService){}

  arrayCaracteristicas = [''];

  agregarCaracteristica(caracteristica: any){
    this.servicioEmpleado.muestraMensaje("Nueva caracteristica : " + caracteristica);
    this.arrayCaracteristicas.push(caracteristica);
  }

}
