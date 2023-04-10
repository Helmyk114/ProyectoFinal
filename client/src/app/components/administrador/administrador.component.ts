import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit{

  comentarios: any = [];

  constructor(private http:HttpClient,
              private formularioService:FormularioService){}

  ngOnInit(): void {
    this.listarcomentarios()
  }

  listarcomentarios(){
    this.formularioService.mostrarComentarios().subscribe(
      res =>{
        this.comentarios = res;
      },
      err => console.error(err)
    )
  }


}
