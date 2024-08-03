import { Component, Input, Output, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  carrito: boolean;
  total:number;
  listaCarrito: Array<Product>;
  productos: Array<Product>;
  constructor(public app: AppComponent) {
    this.productos = [
      new Product(0,"helado7", "Churros", "Churros recién hechos con azúcar, rellenos de dulce de leche o crema ", 50),
      new Product(0,"helado6", "Porción torta Oreo", "Porción de torta Oreo de 5 cm de ancho y 10 cm de largo con Oreos incorporadas", 120),
      new Product(0,"helado5", "Vaso de helado (mediano)", "Vasos de helado con crema americana, chocolate y cacao amargo, acompañado de frutilla o tubo de chocolate", 370),
      new Product(0,"helado4", "1/4 kg de helado (3 sabores)", "1/4 kg de helado con hasta un máximo de 3 sabores a elegir entre frutilla, vainilla, chocolate, dulce de leche, crema americana y granizado", 570),
      new Product(0,"helado9", "Donas bañadas en chocolate","Donas recién hechas bañadas en chocolate, cubiertas de chispas de colores", 180),
    ];

    this.carrito = false;
    this.listaCarrito = [];

    this.total = 0;
}

restar(product: Product) {
  if (product.cantidad > 0) {
    product.cantidad -= 1;
    this.total -= product.price
  }
  
  if (product.cantidad === 0) {
    const index = this.listaCarrito.indexOf(product);
    if (index !== -1) {
      this.listaCarrito.splice(index, 1);
    }
  }
  
}

sumar(product: Product) {
  product.cantidad += 1;
  if (product.cantidad > 0 && !this.listaCarrito.includes(product)) {
    this.listaCarrito.push(product);
  }
  this.total += product.price
}

ngOnInit(): void {
    if(this.listaCarrito.length > 0){
      this.carrito = true;
    }else{
      this.carrito = false;
    }
}

}
class Product {
  public cantidad: number;
  public img: string;
  public name:string;
  public description: string;
  public price: number;
  constructor(cantidad: number, img: string, name: string, description: string, price: number) {
    this.cantidad = cantidad;
    this.img = img;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}