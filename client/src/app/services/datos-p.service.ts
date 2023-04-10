import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Producto } from '../models/Producto';


@Injectable({
  providedIn: 'root'
})
export class DatosPService {

  private url = 'http://localhost:3000/vender'

  constructor(private http:HttpClient) { }

  obtenerProductos(){
    return this.http.get(`${this.url}/productos`);
  };

  obtenerCategoria(categoria:string){
    return this.http.get(`${this.url}/productos/${categoria}`);
  };

  obtenerOferta(descuento:string){
    return this.http.get(`${this.url}/productos/descuento/${descuento}`);
  };

  guardarProducto(producto:Producto){
    return this.http.post(`${this.url}/productos`,producto);
  };

  eliminarProducto(id: string){
    return this.http.delete(`${this.url}/productos/${id}`)
  };
}
