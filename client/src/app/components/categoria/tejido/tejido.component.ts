import { Component, OnInit } from '@angular/core';
import { DatosPService } from 'src/app/services/datos-p.service';

@Component({
  selector: 'app-tejido',
  templateUrl: './tejido.component.html',
  styleUrls: ['./tejido.component.css']
})
export class TejidoComponent implements OnInit{

    //Para mostrar los productos
    tejidos: any = [];

    constructor (private datosPService:DatosPService){}
  
    ngOnInit(): void {
        const categoria = 'Tejido';
        this.datosPService.obtenerCategoria(categoria).subscribe(
          res =>{
            this.tejidos = res;
          },
          err => console.error(err)
        )
      };
}
