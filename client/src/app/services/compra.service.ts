import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compra } from '../models/Compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private url = 'http://localhost:3000/compra';

  constructor(private http:HttpClient
              ) { }

  crearCompra(compras:Compra){
    return this.http.post(`${this.url}`,compras);
  }
}
