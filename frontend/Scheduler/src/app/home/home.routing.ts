import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

// Layouts
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
