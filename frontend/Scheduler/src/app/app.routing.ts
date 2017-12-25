import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SimpleLayoutComponent } from './layouts/simple-layout.component';

// Layouts
export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: '',
        component: SimpleLayoutComponent,
        children: [
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule'
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
