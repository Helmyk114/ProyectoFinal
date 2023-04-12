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

  //Para guardar una compra
  compras: Compra ={
    idUsuario: 0,
    idProducto: 0,
    unidades: 0,
    total: 0,
  }

  total: number = 0
  productos : Producto[]=
  [
  
  ]

  constructor(private compraService:CompraService,
              private registroService:RegistroService){}

  ngOnInit(): void {
    this.productos.forEach(producto => {
      if (producto.cantidad) {
        if (producto.precio) // Verificar si la propiedad existe
        this.total += producto.cantidad * producto.precio;
      }
    });
  };

  guardarCompra(){
    this.compraService.crearCompra(this.compras).subscribe(
      res => (console.log(res)),
      err =>(
        console.error(err)
      )
    )
  }

}
