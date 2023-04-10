import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Barra de Navegacion paginas principales
import { BarraNavComponent } from './components/barra-nav/barra-nav.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { VenderComponent } from './components/vender/vender.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ComprarComponent } from './components/comprar/comprar.component';

//Barra de Navegacion sub-menus-Categorias
import { EsculturaComponent } from './components/categoria/escultura/escultura.component';
import { JoyeriaComponent } from './components/categoria/joyeria/joyeria.component';
import { PinturaComponent } from './components/categoria/pintura/pintura.component';
import { TejidoComponent } from './components/categoria/tejido/tejido.component';

//Barra de Navegacion sub-menus-Login
import { IniciarSesionComponent } from './components/miCuenta/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './components/miCuenta/registro/registro.component';

//Guards
import { AutentificacionGuard } from './guards/autentificacion.guard';
import { RolesGuard } from './guards/roles.guard';

const routes: Routes = [
//Barra de Navegacion paginas principales
  {path:'barraNav',component:BarraNavComponent},
  {path:'ofertas',component:OfertasComponent},
  {path:'vender',component:VenderComponent, canActivate: [AutentificacionGuard]},
  {path:'inicio',component:InicioComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'administrador',component:AdministradorComponent, canActivate: [RolesGuard], data: { expectedRole: 'Administrador'}},
  {path:'comprar',component:ComprarComponent},

//Barra de Navegacion sub-menus-Categorias
  {path:'escultura',component:EsculturaComponent},
  {path:'joyeria',component:JoyeriaComponent},
  {path:'pintura',component:PinturaComponent},
  {path:'tejido',component:TejidoComponent},

//Barra de Navegacion sub-menus-Login
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'registro',component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
