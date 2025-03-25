import { Route } from "@angular/router";

export default[
    {
        path: 'session',
        loadComponent: () => import('./inicio-sesion/inicio-sesion.component')
    }
]as Route [];