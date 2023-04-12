import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formulario } from '../models/Formulario';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private url = 'http://localhost:3000/formulario'

  constructor(private http:HttpClient) { }


  mostrarComentarios(){
    return this.http.get(`${this.url}`)
  };

  guardarComentario(comentario:Formulario){
    return this.http.post(`${this.url}`,comentario)
  };

  eliminarComentrio(id:string){
    return this.http.delete(`${this.url}/${id}`)
  }
}
