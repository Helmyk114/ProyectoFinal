import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorizacionService } from '../services/autorizacion.service';

import decode from 'jwt-decode'
import Swal from 'sweetalert2';

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
      
      Swal.fire({
        icon:'warning',
        title:'Usuario no autorizado',
        text:'Solo el administrador puede acceder'

      })
      console.log('Usuario no autorizado para la vista');
      return false;
    }

    return true;
  }
  
}
