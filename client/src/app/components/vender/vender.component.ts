import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { DatosPService } from 'src/app/services/datos-p.service';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {

  productos: any = [];

  constructor (private datosPService: DatosPService){}

  ngOnInit(){
    this.datosPService.obtenerPrductos().subscribe(
      res =>{
        this.productos = res;
      },
      err => console.error(err)
    )
  }
}
