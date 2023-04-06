import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Barra de Navegacion paginas principales
import { BarraNavComponent } from './components/barra-nav/barra-nav.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { VenderComponent } from './components/vender/vender.component';

//Barra de Navegacion sub-menus-Categorias
import { EsculturaComponent } from './components/categoria/escultura/escultura.component';
import { JoyeriaComponent } from './components/categoria/joyeria/joyeria.component';
import { PinturaComponent } from './components/categoria/pintura/pintura.component';
import { TejidoComponent } from './components/categoria/tejido/tejido.component';

//Barra de Navegacion sub-menus-Login

const routes: Routes = [
//Barra de Navegacion paginas principales
  {path:'barraNav',component:BarraNavComponent},
  {path:'ofertas',component:OfertasComponent},
  {path:'vender',component:VenderComponent},

//Barra de Navegacion sub-menus-Categorias
  {path:'escultura',component:EsculturaComponent},
  {path:'joyeria',component:JoyeriaComponent},
  {path:'pintura',component:PinturaComponent},
  {path:'tejido',component:TejidoComponent}

//Barra de Navegacion sub-menus-Login

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
