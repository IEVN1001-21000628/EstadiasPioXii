import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioSesionComponent } from "./sesion/inicio-sesion/inicio-sesion.component";
import { AlumnoVistaComponent } from "./alumno/alumno-vista/alumno-vista.component";
import { TareasComponent } from "./alumno/tareas/tareas.component";
import { CalificacionProfesoresComponent } from "./profesores/calificacion-profesores/calificacion-profesores.component";
import { TareaProfesoresComponent } from "./profesores/tarea-profesores/tarea-profesores.component";
import { ListaCalificacionesComponent } from "./profesores/lista-calificaciones/lista-calificaciones.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioSesionComponent, AlumnoVistaComponent, TareasComponent, CalificacionProfesoresComponent, TareaProfesoresComponent, ListaCalificacionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pioxii';
}
