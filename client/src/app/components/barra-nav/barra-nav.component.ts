import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutorizacionService } from 'src/app/services/autorizacion.service';

@Component({
  selector: 'app-barra-nav',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.css']
})
export class BarraNavComponent implements OnInit {


  constructor(private autorizacionService:AutorizacionService,
              private router:Router){}
  
  ngOnInit(): void {
    
  }

  cerrarSesion(){
    this.autorizacionService.cerrarSesion()
      this.router.navigate(['inicio']);
  }
}
