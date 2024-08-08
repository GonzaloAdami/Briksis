import { Component, OnInit,HostListener, ChangeDetectorRef , Inject } from '@angular/core';
import { lista } from './product/list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  iniciarCompra: boolean;
  showNavbar: boolean = false;
  
  constructor(private changeDetectorRef: ChangeDetectorRef, public Lista : lista){
  this.iniciarCompra = false;
}
 
  ngOnInit(): void {
  
  }
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if(window.scrollY){
      this.showNavbar = true;
    }else{
      this.showNavbar = false;
    }
  }
  
  
}