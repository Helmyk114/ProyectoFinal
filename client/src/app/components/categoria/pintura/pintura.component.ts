import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/services/compra.service';
import { DatosPService } from 'src/app/services/datos-p.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pintura',
  templateUrl: './pintura.component.html',
  styleUrls: ['./pintura.component.css']
})
export class PinturaComponent implements OnInit {
  
    //Para mostrar los productos
    pinturas: any = [];

    constructor (private datosPService:DatosPService,
                 private compraService:CompraService){}
  
    ngOnInit(): void {
      const categoria = 'Pintura';
      this.datosPService.obtenerCategoria(categoria).subscribe(
        res =>{
           this.pinturas = res;
        },
        err => console.error(err)
      )
    };

    comprar(index:number){
      const idProductos = this.pinturas[index].idProducto
      const precio = this.pinturas[index].precio
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
