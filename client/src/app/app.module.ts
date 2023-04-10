import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './components/barra-nav/barra-nav.component';
import { VenderComponent } from './components/vender/vender.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { EsculturaComponent } from './components/categoria/escultura/escultura.component';
import { JoyeriaComponent } from './components/categoria/joyeria/joyeria.component';
import { PinturaComponent } from './components/categoria/pintura/pintura.component';
import { TejidoComponent } from './components/categoria/tejido/tejido.component';

import { DatosPService } from './services/datos-p.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { IniciarSesionComponent } from './components/miCuenta/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './components/miCuenta/registro/registro.component';
import { AutorizacionService } from './services/autorizacion.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { FormularioService } from './services/formulario.service';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    VenderComponent,
    OfertasComponent,
    EsculturaComponent,
    JoyeriaComponent,
    PinturaComponent,
    TejidoComponent,
    InicioComponent,
    FooterComponent,
    ContactoComponent,
    IniciarSesionComponent,
    RegistroComponent,
    AdministradorComponent,
    ComprarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [
    DatosPService,
    AutorizacionService,
    FormularioService,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
