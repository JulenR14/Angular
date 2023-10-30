import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { DataServices } from "./data.services";

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService: DataServices) {}

    empleados: Empleado[] = [
        new Empleado("Julen", "Redondo", "CEO", 2000),
        new Empleado("Alex", "Sanchez", "Desarrollador", 1500),
        new Empleado("Charles", "Ruiz", "Desarrollador Senior", 3000),
        new Empleado("Marta", "Sebastia", "Criminologa", 5000),
      ];

      agregarEmpleadoServicio(empleado: Empleado){
        this.servicioVentanaEmergente.muestraMensaje("El nombre es : " + empleado.nombre);
        this.empleados.push(empleado);
        this.dataService.guardarEmpleados(this.empleados);
      }

      modificarEmpleado(empleado: Empleado, indice: number){
        this.empleados.splice(indice, 1);
        this.empleados.splice(indice, 0, empleado);
      }

      eliminarEmpleado(indice: number){
        this.empleados.splice(indice, 1);
      }

      encontrarEmpleado(indice: number){
        return this.empleados[indice];
      }
}