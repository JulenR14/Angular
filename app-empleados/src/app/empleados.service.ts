import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService) {}

    empleados: Empleado[] = [
        new Empleado("Julen", "Redondo", "CEO", 2000),
        new Empleado("Alex", "Sanchez", "Desarrollador", 1500),
        new Empleado("Charles", "Ruiz", "Desarrollador Senior", 3000),
        new Empleado("Marta", "Sebastia", "Criminologa", 5000),
      ];

      agregarEmpleadoServicio(empleado: Empleado){
        this.servicioVentanaEmergente.muestraMensaje("El nombre es : " + empleado.nombre);
        this.empleados.push(empleado);
      }
}