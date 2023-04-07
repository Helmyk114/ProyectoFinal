import { Component, OnInit } from '@angular/core';
import { DatosPService } from 'src/app/services/datos-p.service';

@Component({
  selector: 'app-joyeria',
  templateUrl: './joyeria.component.html',
  styleUrls: ['./joyeria.component.css']
})
export class JoyeriaComponent implements OnInit{

  //Para mostrar los productos
  joyerias: any = [];

  constructor(private datosPService:DatosPService){}

  ngOnInit(): void {
    const categoria = 'Joyeria';
    this.datosPService.obtenerCategoria(categoria).subscribe(
      res =>{
        this.joyerias = res;
      },
      err => console.error(err)
    )
  }

}
