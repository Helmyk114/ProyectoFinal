import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResgistroU } from 'src/app/models/RegistroU';
import { RegistroService } from 'src/app/services/registro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  resgitroU: ResgistroU ={
    nombreUsuario:'',
    apellidoUsuario:'',
    usuario:'',
    correo:'',
    sexo:'',
    pais:'',
    contrasena:'',
    rol:'Usuario'
  }

  constructor(private registroService:RegistroService,
              private router:Router){}

  ngOnInit(): void {
    
  }


  registroUsuario(){
    this.registroService.crearUsuario(this.resgitroU).subscribe(
      res => Swal.fire({
        icon: 'success',
        title: 'Usuario creado',
        text:'Su usuario se ha creado correctamente'
      }).then((resultado) =>{
        if (resultado) {
          this.router.navigate(['inicio']);
          console.log(res);
        }
      }),

      err => Swal.fire({
        icon: 'error',
        title: 'Opps...',
        text: 'Su usuario no se ha podido crear correctamente'
      })
    )
  }
}
