import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {


  private url = 'http://localhost:3000/usuario';

  constructor(private http:HttpClient,
              private jwtHelper:JwtHelperService) { }

  iniciarSesion(usuario:Usuario){
    return this.http.post(`${this.url}/iniciarSesion`,usuario)
  };

  estaAutorizado():boolean{
    const token = localStorage.getItem('token');
    if (this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')) {
      return false;
    }
    return true;
  };

  cerrarSesion():void{
    localStorage.removeItem('token');
  };
}
