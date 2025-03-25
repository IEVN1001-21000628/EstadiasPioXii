export interface Usuarios {
    id_usuario?: number;
  nombre: string;
  apellido: string;
  correo: string;
  contrasena: string;
  rol: 'estudiante' | 'maestro';
}
