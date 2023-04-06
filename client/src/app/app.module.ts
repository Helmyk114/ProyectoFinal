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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    VenderComponent,
    OfertasComponent,
    EsculturaComponent,
    JoyeriaComponent,
    PinturaComponent,
    TejidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [
    DatosPService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
