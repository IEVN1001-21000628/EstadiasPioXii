import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { response } from 'express';



@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tareas.component.html',
  styles: ``
})
export default class TareasComponent implements OnInit {

  tareas: any[] = [];
  materias: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.obtenerMaterias();
    this.obtenerTareas();
  }

  obtenerMaterias() {
    this.apiService.obtenerMaterias().subscribe(response => {
      if (response.exito) {
        // Convertir array en objeto { idMateria: nombre }
        console.log("📚 Materias obtenidas:", this.materias);
      }
    });
  }

  obtenerTareas() {
    this.apiService.mostrarTareas().subscribe(response => {
      if (response.exito) {
        this.tareas = response.tareas;
        console.log("📌 Tareas obtenidas con materia:", this.tareas);
      } else {
        console.error("Error al obtener tareas:", response.mensaje);
      }
    });
  }
}
