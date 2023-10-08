import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miprimeraApp';
  nombre = 'Julen Redondo';
  resultado = operacion(3,5);

}

function operacion(n1:number, n2:number) {
  return n1 * n2
}