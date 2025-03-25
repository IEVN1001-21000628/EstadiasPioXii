import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './inicio-sesion.component.html',
  styles: ``
})
export default class InicioSesionComponent implements OnInit {
  loginForm!: FormGroup;
  errorMensaje: string = '';


  constructor(private fb: FormBuilder,private api: ApiService, private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { correo, contrasena } = this.loginForm.value;
      this.api.login(correo, contrasena).subscribe({
        next: (response: any) => {
          if (response.exito && response.usuario) { // Asegura que usuario existe
            localStorage.setItem('usuario', JSON.stringify(response.usuario));
  
            if (response.usuario.rol === 'estudiante') {
              this.router.navigate(['/alumno']);
            } else if (response.usuario.rol === 'maestro') {
              this.router.navigate(['/profesores']); // Corrige la ruta a profesores
            }
          } else {
            this.errorMensaje = response.mensaje;
          }
        },
        error: () => {
          this.errorMensaje = 'Error al iniciar sesión';
        }
      });
    }
  }
  
}

