import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  iniciarCompra: boolean;
constructor(){
  this.iniciarCompra = false;
}
 
  ngOnInit() {
   
  }
}