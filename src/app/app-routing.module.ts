import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamVideoComponent } from './paginas/cam-video/cam-video.component';
import { CompuComponent } from './paginas/compu/compu.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ElectroComponent } from './paginas/electro/electro.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { MercanciaComponent } from './paginas/mercancia/mercancia.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { UsuarioComponent } from './paginas/usuario/usuario.component';

const routes: Routes = [
{path:'inicio', component:InicioComponent},
{path:'nosotros', component:NosotrosComponent},
{path:'usuario', component:UsuarioComponent},
{path:'mercancia', component:MercanciaComponent},
{path:'cam-video', component:CamVideoComponent},
{path:'compu', component:CompuComponent},
{path:'contacto', component:ContactoComponent},
{path:'electro', component:ElectroComponent},


{path:'',redirectTo:'/inicio',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

