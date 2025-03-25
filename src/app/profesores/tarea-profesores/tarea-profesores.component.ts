import { Component, OnInit } from '@angular/core';
import { Routes, RouterLink } from "@angular/router";
import { ApiService } from '../../api.service';
import { FormBuilder, FormGroup, Validator, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { error } from 'console';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-tarea-profesores',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './tarea-profesores.component.html',
  styles: ``
})
export default class TareaProfesoresComponent implements OnInit{
  tareaForm!: FormGroup;
  materias: any[] = [];
  maestros: any[] = [];

  constructor(private fb: FormBuilder, private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.tareaForm=this.fb.group({
      titulo: ['',[Validators.required, Validators.minLength(3)]],
      descripcion: ['',[Validators.required, Validators.minLength(10)]],
      fecha_publicacion: ['',[Validators.required]],
      fecha_entrega: ['',[Validators.required]],
      id_materia: ['',[Validators.required]],
      id_maestro: ['',[Validators.required]]
    });
    this.obtenerMaterias();
    this.obtenerMaestros();
  }
  obtenerMaterias() {
    this.apiService.obtenerMaterias().subscribe(
      response => {
        if (response.exito && Array.isArray(response.Materias)) {
          this.materias = response.Materias;
          console.log("✅ Materias obtenidas:", JSON.stringify(this.materias, null, 2));
        } else {
          console.error("❌ Error en la respuesta de la API (Materias):", response);
        }
      },
      error => console.error("🚨 Error al obtener materias", error)
    );
  }

  obtenerMaestros() {
    this.apiService.obtenerMaestros().subscribe(
      response => {
        if (response.exito && Array.isArray(response.Maestros)) {
          this.maestros = response.Maestros;
          console.log("✅ Maestros obtenidos:", JSON.stringify(this.maestros, null, 2));
        } else {
          console.error("❌ Error en la respuesta de la API (Maestros):", response);
        }
      },
      error => console.error("🚨 Error al obtener maestros", error)
    );
  }

  registrarTarea() {
    console.log("📩 Datos del formulario antes de enviar:", this.tareaForm.value);

    if (this.tareaForm.valid) {
        const datosAEnviar = {
            ...this.tareaForm.value,
            id_materia: Number(this.tareaForm.value.id_materia), // Convertir a número
            id_maestro: Number(this.tareaForm.value.id_maestro) // Convertir a número
        };

        console.log("📩 Datos formateados para enviar:", datosAEnviar);

        this.apiService.registrarTareas(datosAEnviar).subscribe(
            response => {
                console.log(response);
                alert('Tarea registrada');
                this.tareaForm.reset();
            },
            error => {
                console.error('Error al registrar tarea', error);
                alert('Hubo un error');
            }
        );
    } else {
        alert('Llena todos los campos');
    }
}

}
