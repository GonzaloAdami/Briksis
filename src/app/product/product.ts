// product.ts
export class Product {
    public cantidad: number;
    public img: string;
    public name: string;
    public description: string;
    public price: number;
  
    constructor(cantidad: number, img: string, name: string, description: string, price: number) {
      this.cantidad = cantidad;
      this.img = img;
      this.name = name;
      this.description = description;
      this.price = price;
    }
  
    getPrecioTotal() {
      return this.price * this.cantidad;
    }
  
    sumar() {
      this.cantidad++;
    }
  
    restar() {
      if (this.cantidad > 0) {
        this.cantidad--;
      }
    }
  }
  