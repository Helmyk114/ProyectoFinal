import { Component, OnInit } from '@angular/core';
import { DatosPService } from 'src/app/services/datos-p.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit{
    //Para mostrar los productos
    ofertas: any = [];

    constructor (private datosPService:DatosPService){}
  
    ngOnInit(): void {
        const descuento = 'Si';
        this.datosPService.obtenerOferta(descuento).subscribe(
          res =>{
            this.ofertas = res;
          },
          err => console.error(err)
        )
      };

}
