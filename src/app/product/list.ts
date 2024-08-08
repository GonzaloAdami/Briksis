import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable({
  providedIn: 'root'
})
export class lista {
  productos: Array<Product>;

  constructor() {
    this.productos = [];
  }

  calcularTotal() {
    return this.productos.reduce((acc, product) => acc + product.getPrecioTotal(), 0);
  }
}
