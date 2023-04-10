import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Formulario } from 'src/app/models/Formulario';
import { FormularioService } from 'src/app/services/formulario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  form: FormGroup;

  //datos para guardar comentario
   comentario: Formulario = {
    nombre:'',
    apellido:'',
    correo:'',
    telefono:'',
    mensaje:''
  };

  constructor(private fm:FormBuilder,
              private http:HttpClient, 
              private formularioService:FormularioService ) {
                    
  this.form = this.fm.group({
    nombre: ['', [Validators.required, Validators.maxLength(10)]],
    apellido: ['', [Validators.required, Validators.maxLength(20)]],
    email: ['', [Validators.email, Validators.required]],
    telefono: ['', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
      Validators.pattern(/^[1-9]\d{6,10}$/
      )])],
    mensaje: ['',[Validators.required,Validators.maxLength(200)]],
            
    })
  };

  ngOnInit(): void {

  };

  enviarComentario() {
    if(this.form.valid){
      this.formularioService.guardarComentario(this.comentario).subscribe(
        res=> Swal.fire({
          icon:'success',
          title: 'Comentario guardado',
          text: 'Su comentario ha sido guardado correctamente'
        }).then((result)=>{
          if (result){
           location.reload();
           console.log(res);
          }
        }),
        err => Swal.fire({
          icon:'error',
          title:'Opps...',
          text:'Su comentario no se pudo guardar correctamente',
        })
      )
    }
    else
    {
      Swal.fire({
        icon:'error',
        title:'Opps...',
        text:'Hay datos inválidos en el formulario',
      })
    }
  };

}
