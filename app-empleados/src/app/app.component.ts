import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Listados de empleados';

  empleados: Empleado[] = [];

  nombre: string = "Nombre";
  apellido: string = "Apellido";
  cargo: string = "Cargo";
  salario: number = 0;

  constructor(private miservicio: ServicioEmpleadosService, private empleadosService: EmpleadosService){
    //this.empleados = this.empleadosService.empleados;
  }
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  agregarEmpleado(){
    //this.miservicio.muestraMensaje("Nombre : " + this.nombre + " Apellido : " + this.apellido);
    this.empleadosService.agregarEmpleadoServicio(new Empleado (this.nombre, this.apellido, this.cargo, this.salario));
  }

  

}
