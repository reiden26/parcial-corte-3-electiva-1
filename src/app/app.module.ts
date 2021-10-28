import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PieComponent } from './componentes/pie/pie.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { Seccion1Component } from './componentes/seccion1/seccion1.component';
import { Seccion2Component } from './componentes/seccion2/seccion2.component';
import { Seccion3Component } from './componentes/seccion3/seccion3.component';
import { Seccion4Component } from './componentes/seccion4/seccion4.component';
import { Seccion5Component } from './componentes/seccion5/seccion5.component';
import { Seccion6Component } from './componentes/seccion6/seccion6.component';
import { Seccion7Component } from './componentes/seccion7/seccion7.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ElectroComponent } from './paginas/electro/electro.component';
import { CompuComponent } from './paginas/compu/compu.component';
import { CamVideoComponent } from './paginas/cam-video/cam-video.component';
import { UsuarioComponent } from './paginas/usuario/usuario.component';
import { MercanciaComponent } from './paginas/mercancia/mercancia.component';
import { Seccion8Component } from './componentes/seccion8/seccion8.component';

// servicio 
import {CargarscriptsService} from "./cargarscripts.service"

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieComponent,
    MenuComponent,
    Seccion1Component,
    Seccion2Component,
    Seccion3Component,
    Seccion4Component,
    Seccion5Component,
    Seccion6Component,
    Seccion7Component,
    InicioComponent,
    NosotrosComponent,
    ContactoComponent,
    ElectroComponent,
    CompuComponent,
    CamVideoComponent,
    UsuarioComponent,
    MercanciaComponent,
    Seccion8Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CargarscriptsService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
