import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import { ProductComponent } from './product/product.component';
import { CompraFormularioComponent } from './compra-formulario/compra-formulario.component';
import { lista } from './product/list';


@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    ProductComponent,
    CompraFormularioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [lista],
  bootstrap: [AppComponent]
})
export class AppModule { }
