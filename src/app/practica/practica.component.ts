import { Component } from '@angular/core';
import { ServiciopracticaService } from '../serviciopractica.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-practica',
  imports: [NgFor],//no importar HttpClient porqeu está en appconfig.ts
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent {

public datos:any[]=[];//guardar datos
constructor(private servicio:ServiciopracticaService) { }//inyeccion de dependencias de ServiciopracticaService
ngOnInit(): void {
  this.servicio.getDatos().subscribe(
    (datos)=>{
      this.datos=datos;
    }
  );
}
}
