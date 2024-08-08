import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { lista } from './list';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  carrito: boolean;

  constructor(public app: AppComponent, public Lista: lista) {
    this.carrito = false;

    // Crear instancias de Product directamente
    this.Lista.productos.push(
      new Product(0, "helado7", "Churros", "Churros recién hechos con azúcar, rellenos de dulce de leche o crema", 50),
      new Product(0, "helado6", "Porción torta Oreo", "Porción de torta Oreo de 5 cm de ancho y 10 cm de largo con Oreos incorporadas", 120),
      new Product(0, "helado5", "Vaso de helado (mediano)", "Vasos de helado con crema americana, chocolate y cacao amargo, acompañado de frutilla o tubo de chocolate", 370),
      new Product(0, "helado4", "1/4 kg de helado (3 sabores)", "1/4 kg de helado con hasta un máximo de 3 sabores a elegir entre frutilla, vainilla, chocolate, dulce de leche, crema americana y granizado", 570),
      new Product(0, "helado9", "Donas bañadas en chocolate", "Donas recién hechas bañadas en chocolate, cubiertas de chispas de colores", 180)
    );
  }

  calcularTotal() {
    return this.Lista.calcularTotal();
  }

  ngOnInit(): void { }
}
