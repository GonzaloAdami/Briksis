import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-compra-formulario',
  templateUrl: './compra-formulario.component.html',
  styleUrls: ['./compra-formulario.component.css']
})
export class CompraFormularioComponent {
  compraFinalizada = false; // Variable para simular `this.compraFinalizada`

   constructor(public app : AppComponent){

   }
  onSubmit(formulario: HTMLFormElement): void {
    if (formulario) {
      // Evita el envío del formulario
      event?.preventDefault();

      const numero = formulario['numero']?.value;
      const vencimiento = formulario['vencimiento']?.value;
      const nombre = formulario['nombre']?.value;
      const cvv = formulario['cvv']?.value;

      if (numero && vencimiento && nombre && cvv) {
        // Aquí puedes poner las validaciones adicionales que necesites

        // Si todo es válido, setea compraFinalizada a true
        this.compraFinalizada = true;
        console.log('Compra finalizada:', this.compraFinalizada);
        
      } else {
        alert('Por favor, completa todos los campos correctamente.');
      }
    }
  }
}
