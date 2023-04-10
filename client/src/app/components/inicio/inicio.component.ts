import { Component, OnInit } from '@angular/core';
import { DatosPService } from 'src/app/services/datos-p.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  //Para mostrar los productos
  productos:any=[];

  constructor(private datosPService:DatosPService){}

  ngOnInit(): void {
       this.datosPService.obtenerProductos().subscribe(
      res =>{
        this.productos = res;
      },
      err => console.error(err)
    )
  }

}
