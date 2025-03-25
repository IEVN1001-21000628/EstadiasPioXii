import { error } from 'console';
import { ApiService } from '../../api.service';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-calificacion-profesores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calificacion-profesores.component.html',
  styles: ``
})
export class CalificacionProfesoresComponent implements OnInit {

  materias: any[] = [];
  grupos: any[] = [];
  materiasSeleccionadas: number | null = null;
  gruposSeleccionados: number | null = null;
  constructor(private apiservice: ApiService){

  }
  ngOnInit() {
    this.obtenerMaterias();
    this.obtenerGrupos();
  }

  obtenerMaterias() {
    this.apiservice.obtenerMaterias().subscribe(
      response => {
        if (response.exito && Array.isArray(response.Materias)) {
          this.materias = response.Materias;
          console.log("Materias obtenidas:", JSON.stringify(this.materias, null, 2)); // Ver JSON bien formateado
        } else {
          console.error("Error en la respuesta de la API:", response);
        }
      },
      error => console.error("Error al obtener materias", error)
    );
  }
  
  
  obtenerGrupos(){
    this.apiservice.obtenerGrupos().subscribe(
      response => {
        if (response.exito) {
          this.grupos = response.Grupos;
        }
      },
      error => console.error("Error al obtener grupos", error)
    )
  }
}
