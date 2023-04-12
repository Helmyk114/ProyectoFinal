import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResgistroU } from '../models/RegistroU';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private url = 'http://localhost:3000/registro'

  
  constructor(private http:HttpClient) { }

  crearUsuario(registroU:ResgistroU){
    return this.http.post(`${this.url}`,registroU);
  }

  consultarUsuario(){
    return this.http.get(`${this.url}`)
  }
}
