import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}


  // 🔹 Login de usuario
  login(correo: string, contrasena: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { correo, contrasena });
  }
  // 🔹 Obtener materias
  obtenerMaterias(): Observable<any> {
    return this.http.get(`${this.apiUrl}/materias`);
  }
  // 🔹 Obtener grupos
  obtenerGrupos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/grupos`);
  }

  /// 🔹 Obtener calificaciones

  obtenerCalificaciones(): Observable<any>{
    return this.http.post(`${this.apiUrl}/calificaciones`, {});
  }

  // 🔹 registrar tareas
  registrarTareas(tarea: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/tareas`, tarea);
  }

  // 🔹 Obtener maestro

  obtenerMaestros(): Observable<any> {
    return this.http.get(`${this.apiUrl}/maestros`);
  }

    // 🔹 mostrar tareas
    mostrarTareas(): Observable<any>{
      return this.http.get(`${this.apiUrl}/tareas`);
    }
}
