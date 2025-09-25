import { Routes } from "@angular/router";
import { AddEditSolicitudComponent } from "./add-edit-solicitud/add-edit-solicitud.component";

export default [
    {
        path: '',
        loadComponent: () => import('./solicitud.component').then(c => c.SolicitudComponent)
    },
    {
        path: 'add-solicitud',
        component: AddEditSolicitudComponent
    },
    {
        path: 'edit-solicitud/:id',
        component: AddEditSolicitudComponent
    },
] as Routes;