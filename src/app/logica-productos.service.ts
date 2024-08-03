import { Injectable, ElementRef, HostListener, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogicaProductosService {

  @ViewChild('container', { static: false }) container?: ElementRef;

  private isDragging = false;
  private startY = 0;
  private startScrollTop = 0;
  
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    if (this.container) {
      this.isDragging = true;
      this.startY = event.clientY;
      this.startScrollTop = this.container.nativeElement.scrollTop;
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isDragging && this.container) {
      const deltaY = event.clientY - this.startY;
      this.container.nativeElement.scrollTop = this.startScrollTop - deltaY;
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(): void {
    this.isDragging = false;
  }
  title = 'Modulo3';
  precio = 0;
  titleProduct = '';
  description = '';
  productImg = '';
  precioTotal = 0;
  classProduct = '';
  product: { precio: string, titleProduct: string, description: string, productImg: string, classProduct: string };
  oreo: { precio: string, titleProduct: string, description: string, productImg: string, classProduct: string };
  torta: { precio: string, titleProduct: string, description: string, productImg: string, classProduct: string };
  pastelito: { precio: string, titleProduct: string, description: string, productImg: string, classProduct: string };
  buttonDeleteElementList = document.querySelector('.buttonDeleteElementList') as HTMLElement;
  selectProductAddList = document.querySelector('.selectProductAddList') as HTMLElement;
  productoInterno: {};
  constructor() {
  
       
    
    this.productoInterno ={

    }
      
    
    
    // Crea una instancia de la clase HoverEffect
    

    this.pastelito = {
      precio: "200",
      titleProduct: 'PASTELITO DE CHOCOLATE',
      description : 'Pastelito de chocolate con crema y dulce',
      productImg : 'pastelito.webp',
      classProduct: 'pastelitoImgProduct',
    }
    this.oreo = {
      precio: "600",
      titleProduct: 'BATIDO DE CREMA CON OREO',
      description : 'Batido que contiene leche, crema americana, oreo, cacao y hielo',
      productImg : 'oreo.webp',
      classProduct: 'oreoImgProduct',
    };
    this.torta = {
      precio: "350",
      titleProduct: 'TORTA DE CHOCOLATE',
      description : 'Torta de chocolate con dulce de leche y crema de mani',
      productImg : 'pastel.webp',
      classProduct: 'tortaImgProduct',
    }
    this.product = {
      precio: "600",
      titleProduct: 'BATIDO DE CREMA CON OREO',
      description : 'Batido que contiene leche, crema americana, oreo, cacao y hielo',
      productImg : 'oreo.webp',
      classProduct: 'oreoImgProduct',
    };
  }
  actualizarProducto() {

  }
  newProduct(producto: any){
    this.product = {
      precio: producto.precio,
      titleProduct: producto.titleProduct,
      description: producto.description,
      productImg: producto.productImg,
      classProduct: producto.classProduct
    };
  }
  addList() {
    this.precioTotal = this.precioTotal + (this.precio * this.cantidad);
  
    if (this.cantidad > 0) {
      const buttonContainer = document.getElementById("containerProductsList");
      const existingButton = buttonContainer?.querySelector(`button[data-title="${this.product.titleProduct}"]`);
      
      if (existingButton) {
        // Si el botón ya existe, actualiza la cantidad
        const contador = existingButton.querySelector(".cantidadProductoLista") as HTMLElement; // Aquí se especifica el tipo
        if (contador) {
          const cantidadActual = parseInt(contador.innerText, 10);
          contador.innerText = (cantidadActual + this.cantidad).toString();
        }
      } else {
        // Si el botón no existe, crea uno nuevo
        const button = document.createElement("button");
        button.classList.add("selectProductAddList");
        button.innerText = this.product.titleProduct;
        button.setAttribute("data-title", this.product.titleProduct); // Agregar atributo para identificarlo
        button.setAttribute("onclick", "restarPedido()");
  
        const contador = document.createElement("div");
        contador.classList.add("cantidadProductoLista");
        contador.innerText = this.cantidad.toString();
  
        buttonContainer?.appendChild(button);
        button?.appendChild(contador);
      }
    }
  }
  
  ngOnInit() {
    this.actualizarProducto();
  }
  cantidad: number = 0;
  restarPedido() {
 
    if (this.cantidad > 0) {
      const buttonContainer = document.getElementById("containerProductsList");
      const existingButton = buttonContainer?.querySelector(`button[data-title="${this.product.titleProduct}"]`);
      const button = document.querySelector('.selectProductAddList') as HTMLElement;
      
     
      if (existingButton) {
        const contador = existingButton.querySelector(".cantidadProductoLista") as HTMLElement;
        
        if (contador) {
          const cantidadActual = parseInt(contador.innerText, 10);
          const nuevaCantidad = cantidadActual - 1;
          
          this.precioTotal -= Number(this.product.precio);
          
            if (nuevaCantidad <= 0) {
              buttonContainer?.removeChild(existingButton); 
            } 
            else {            
              contador.innerText = nuevaCantidad.toString();
            }
          } 
        }
      }
    }
  
  sumar() {
    this.cantidad++;
    if (this.cantidad < 99) {
      
  
      // Obtén referencias a los elementos DOM
      const contadorElement = document.getElementById('contador');
      const restarElement = document.getElementById('restar');
      if (contadorElement !== null && restarElement !== null) {
        if (this.cantidad > 9) {
          // Ajusta la posición y el estilo cuando la cantidad es mayor que 9
         
  
          if (this.cantidad === 99) {
            contadorElement.style.color = '#F7AEA6';
          }else{
            contadorElement.style.color = '#ECE3D9';
          }
       
        } 
        
      }
    }
  }
  
restar(){

if(this.cantidad > 0){
  this.cantidad--;
  var contadorElement = document.getElementById('contador'); 
  if (contadorElement !== null){
     // Obtén referencias a los elementos DOM
     const contadorElement = document.getElementById('contador');
     const sumarElement = document.getElementById('sumar');
 
     if (contadorElement !== null && sumarElement !== null) {
      if (this.cantidad < 9) {
       
      }
 
         if (this.cantidad === 99) {
           contadorElement.style.color = '#F7AEA6';
         }else{
           contadorElement.style.color = '#ECE3D9';
         }
        
       
     }
  }
 
}
}
}
