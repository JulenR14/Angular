import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {

  empleados: Empleado[] = [];

  nombre: string = "Nombre";
  apellido: string = "Apellido";
  cargo: string = "Cargo";
  salario: number = 0;

  constructor(private router:Router, private miservicio: ServicioEmpleadosService, private empleadosService: EmpleadosService){}
  
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  volverHome(){
    this.router.navigate([""]);
  }

  agregarEmpleado(){
    //this.miservicio.muestraMensaje("Nombre : " + this.nombre + " Apellido : " + this.apellido);
    this.empleadosService.agregarEmpleadoServicio(new Empleado (this.nombre, this.apellido, this.cargo, this.salario));
    this.router.navigate([""]);
  }
}
