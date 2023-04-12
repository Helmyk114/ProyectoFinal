import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compra } from '../models/Compra';
import { Venta } from '../models/Venta';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private url = 'http://localhost:3000/compra';

  constructor(private http:HttpClient){}

  crearCompra(compras:Compra){
    return this.http.post(`${this.url}`,compras);
  };

  mostrarCompra(){
    return this.http.get(`${this.url}`)
  };

  eliminarProducto(id:string){
    return this.http.delete(`${this.url}/${id}`)
  };

  aquirir(venta:Venta){
    return this.http.post(`${this.url}/vendido`,venta);
  }
}
