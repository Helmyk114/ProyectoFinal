import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorizacionService } from '../services/autorizacion.service';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionGuard implements CanActivate {

  constructor(private autorizacionService:AutorizacionService,
              private router:Router){}

  canActivate():boolean{
    if(!this.autorizacionService.estaAutorizado()){
      console.log('Token no es valido o ya expiro');
      this.router.navigate(['iniciar-sesion']);
      return false
    }
    return true;
  }
   
    
  
  
}
