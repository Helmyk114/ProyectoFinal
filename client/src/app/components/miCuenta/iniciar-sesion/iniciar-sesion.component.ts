import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { AutorizacionService } from 'src/app/services/autorizacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit{

  usuario:Usuario ={
    usuario: '',
    contrasena: ''
  }

  constructor(private autorizacionServie:AutorizacionService,
              private router:Router){}

  ngOnInit(): void {
    
  }

  iniciarSesion(){
    this.autorizacionServie.iniciarSesion(this.usuario).subscribe( (res:any) =>{
      console.log(res);
      localStorage.setItem('token',res.token);
      this.router.navigate(['inicio']);
    })
  }
}
