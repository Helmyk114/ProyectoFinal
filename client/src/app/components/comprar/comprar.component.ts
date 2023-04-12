import { Component, OnInit} from '@angular/core';
import { Compra } from 'src/app/models/Compra';
import { Producto } from 'src/app/models/Producto';
import { CompraService } from 'src/app/services/compra.service';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit{


  //Para mostrar la compra
  comprar: any = [];

 

  constructor(private compraService:CompraService){}

  ngOnInit(): void {
    this.mostrarCompra()
  };

  mostrarCompra(){
    this.compraService.mostrarCompra().subscribe(
      res =>(
        this.comprar = res
      ),
      err =>(
        console.error(err)
      )
    )
  };




}
