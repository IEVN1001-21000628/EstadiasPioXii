import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'inicio_session',
        loadChildren: () => import('./auth/sesion.routes').then(m => m.default)
    },
    {
        path: 'profesores',
        loadChildren: () => import('./profesores/profesores.routes').then(m => m.default)
    },
    {
        path: 'pio_xii',
        loadChildren: () => import('./pio_xii/pio.routes').then(m => m.default)
    },
    {
        path: 'alumno',
        loadChildren: () => import('./alumno/alumno.routes').then(m => m.default)
    }
] as Routes;