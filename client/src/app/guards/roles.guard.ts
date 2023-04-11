import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorizacionService } from '../services/autorizacion.service';

import decode from 'jwt-decode'
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {

  constructor(private autorizacionService:AutorizacionService,
              public router:Router){}

  canActivate(route: ActivatedRouteSnapshot):boolean{
    const expectedRole = route.data['expectedRole'];
    const token = localStorage.getItem('token');
    let decodetoken:any = {};
    decodetoken = decode(token!)

    console.log(decodetoken.rol)

    if(!this.autorizacionService.estaAutorizado() || decodetoken.rol !== expectedRole ){
      
      console.log('Usuario no autorizado para la vista');
      return false;
    }

    return true;
  }
  
}
