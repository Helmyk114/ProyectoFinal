import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { DatosPService } from 'src/app/services/datos-p.service';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {

//Para mostrar los productos
  productos: any = [];

//Para guardar un producto
  producto: Producto = {
 
    nombreProducto: '',
    descripcion: '',
    imagenProducto: '',
    categoria: '',
    estado: '',
    cantidad: 0,
    precio: 0,
    descuento: '',
    valor: 0,
  };

  constructor (private datosPService: DatosPService){}

  ngOnInit(){
    this.listarProductos();
  };

  listarProductos(){
    this.datosPService.obtenerProductos().subscribe(
      res =>{
        this.productos = res;
      },
      err => console.error(err)
    )
  }

  guardarProducto(){
    this.datosPService.guardarProducto(this.producto).subscribe(
      res =>{
        console.log(res);
        location.reload();
      },
      err => console.error(err)
      
    )
  };

  eliminarProducto(idProducto: string){
    this.datosPService.eliminarProducto(idProducto).subscribe(
      res => {
        console.log(res);
        this.listarProductos();
      },
      err => console.log(err)
    )
  };
}
