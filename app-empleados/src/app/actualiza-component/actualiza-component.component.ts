import { Component } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent {

  empleados: Empleado[] = [];
  empleado: Empleado;

  nombre: String = "Nombre";
  apellido: String = "Apellido";
  cargo: String = "Cargo";
  salario: number = 0;

  indice: number;

  constructor(private router:Router,private route:ActivatedRoute, private miservicio: ServicioEmpleadosService, private empleadosService: EmpleadosService){}
  
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;

    this.indice = this.route.snapshot.params['id'];

    this.empleado = this.empleadosService.encontrarEmpleado(this.indice);
    this.cambiarValoresEmpleado();
  }

  volverHome(){
    this.router.navigate([""]);
  }

  modificarEmpleado(){
    //this.miservicio.muestraMensaje("Nombre : " + this.nombre + " Apellido : " + this.apellido);
    this.empleadosService.modificarEmpleado(new Empleado (this.nombre, this.apellido, this.cargo, this.salario), this.indice);
    this.router.navigate([""]);
  }

  eliminarEmpleado(){
    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate([""]);
  }

  private cambiarValoresEmpleado(){
    this.nombre = this.empleado.nombre;
    this.apellido = this.empleado.apellido;
    this.cargo = this.empleado.cargo;
    this.salario = this.empleado.salario;
  }

}
