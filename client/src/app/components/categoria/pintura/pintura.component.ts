import { Component, OnInit } from '@angular/core';
import { DatosPService } from 'src/app/services/datos-p.service';

@Component({
  selector: 'app-pintura',
  templateUrl: './pintura.component.html',
  styleUrls: ['./pintura.component.css']
})
export class PinturaComponent implements OnInit {
  
    //Para mostrar los productos
    pinturas: any = [];

    constructor (private datosPService:DatosPService){}
  
    ngOnInit(): void {
        const categoria = 'Pintura';
        this.datosPService.obtenerCategoria(categoria).subscribe(
          res =>{
            this.pinturas = res;
          },
          err => console.error(err)
        )
      };
}
