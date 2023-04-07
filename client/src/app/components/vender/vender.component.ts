import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { DatosPService } from 'src/app/services/datos-p.service';
import  Swal  from "sweetalert2";

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
      res => Swal.fire({
        icon: 'success',
        title: 'Producto guardado',
        text:'Su producto ha sido guardado correctamente'
      }).then((resultado) =>{
        if (resultado) {
          location.reload();
          console.log(res);
        }
      }),

      err => Swal.fire({
        icon: 'error',
        title: 'Opps...',
        text: 'Su producto no se pudo guardar correctamente'
      })
    )
  };

  eliminarProducto(idProducto: string){
    Swal.fire({
        icon: 'info',
        title: 'Desea eliminar este producto',
        showCancelButton: true,
        confirmButtonText: 'Eliminar'
      }).then((resultado) =>{
        if(resultado.isConfirmed){
          this.datosPService.eliminarProducto(idProducto).subscribe(
            res =>{
              console.log(res);
              this.listarProductos();
            })
        }
      })
  };
}
