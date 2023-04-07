import { Component, OnInit } from '@angular/core';
import { DatosPService } from 'src/app/services/datos-p.service';

@Component({
  selector: 'app-escultura',
  templateUrl: './escultura.component.html',
  styleUrls: ['./escultura.component.css']
})
export class EsculturaComponent implements OnInit {

  //Para mostrar los productos
  esculturas: any = [];

  constructor (private datosPService:DatosPService){}

  ngOnInit(): void {
      const categoria = 'Escultura';
      this.datosPService.obtenerCategoria(categoria).subscribe(
        res =>{
          this.esculturas = res;
        },
        err => console.error(err)
      )
    };
}

