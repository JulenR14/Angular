import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listados de empleados';

  empleados: Empleado[] = [
    new Empleado("Julen", "Redondo", "CEO", 2000),
    new Empleado("Alex", "Sanchez", "Desarrollador", 1500),
    new Empleado("Charles", "Ruiz", "Desarrollador Senior", 3000),
    new Empleado("Marta", "Sebastia", "Criminologa", 5000),
  ];
  
  nombre: string = "Nombre";
  apellido: string = "Apellido";
  cargo: string = "Cargo";
  salario: number = 0;

  agregarEmpleado(){
    this.empleados.push(new Empleado (this.nombre, this.apellido, this.cargo, this.salario));
  }

}
