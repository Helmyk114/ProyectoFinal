import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/Compra';
import { CompraService } from 'src/app/services/compra.service';
import { DatosPService } from 'src/app/services/datos-p.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  //Para mostrar los productos
  productos:any=[];

   //Para guardar una compra
   compras: Compra ={
    idUsuario: 1,
    idProducto: 0,
    unidades: 0,
    total: 0,
  }

  constructor(private datosPService:DatosPService,
              private compraService:CompraService){}

  ngOnInit(): void {
    this.mostrarProductos()
  };

  mostrarProductos(){
    this.datosPService.obtenerProductos().subscribe(
      res =>{
        this.productos = res;
      },
      err => console.error(err)
    )
  };

  comprar(index:number){
    const idProductos = this.productos[index].idProducto
    const precio = this.productos[index].precio
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
