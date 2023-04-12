import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/services/compra.service';
import { DatosPService } from 'src/app/services/datos-p.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tejido',
  templateUrl: './tejido.component.html',
  styleUrls: ['./tejido.component.css']
})
export class TejidoComponent implements OnInit{

    //Para mostrar los productos
    tejidos: any = [];

    constructor (private datosPService:DatosPService,
                 private compraService:CompraService){}
  
    ngOnInit(): void {
      const categoria = 'Tejido';
      this.datosPService.obtenerCategoria(categoria).subscribe(
        res =>{
          this.tejidos = res;
        },
        err => console.error(err)
      )
    };

    comprar(index:number){
      const idProductos = this.tejidos[index].idProducto
      const precio = this.tejidos[index].precio
      console.log(idProductos)
       const compra = {
        idUsuario: 1,
        idProducto: idProductos,
        unidades: 1,
        total: precio,
       }
      this.compraService.crearCompra(compra).subscribe(
        res =>  Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto agregado',
          text:'Su producto fue agregado al carrito con exito',
          showConfirmButton: false,
          timer: 1000
        }),
        err =>{
          console.error
        }
      )
    };
}
