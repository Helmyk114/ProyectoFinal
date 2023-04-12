import { Component, OnInit} from '@angular/core';
import { CompraService } from 'src/app/services/compra.service';
import Swal from 'sweetalert2';

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

  eliminarProducto(id:string){
    Swal.fire({
      icon: 'info',
      title: 'Desea eliminar este producto',
      showCancelButton: true,
      confirmButtonText: 'Eliminar'
    }).then((resultado) =>{
      if(resultado.isConfirmed){
        this.compraService.eliminarProducto(id).subscribe(
          res =>{
            console.log(res);
            this.mostrarCompra();
          })
      }
    })
  };

  adquirir(index:number){
    const idProductos = this.comprar[index].idProducto
    const unidades = this.comprar[index].unidades
    console.log(idProductos)
    console.log(unidades)
    const datos = {
      idProducto: idProductos,
      unidades: unidades
    }
    this.compraService.aquirir(datos).subscribe(
      res => Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Gracias por su compra',
        text:'Su compra fue realizada con exito',
        showConfirmButton: false,
        timer: 1500
      }),
      err =>(
        console.error(err)
      )
    )
  };
}
