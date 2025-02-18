import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioSesionComponent } from "./sesion/inicio-sesion/inicio-sesion.component";
import { AlumnoVistaComponent } from "./alumno/alumno-vista/alumno-vista.component";
import { TareasComponent } from "./alumno/tareas/tareas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioSesionComponent, AlumnoVistaComponent, TareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pioxii';
}
