import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickerComponent } from './picker/picker.component';

// Layouts
export const routes: Routes = [
    {
        path: '',
        component: PickerComponent,
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
