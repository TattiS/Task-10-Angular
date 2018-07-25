import { Routes, RouterModule } from '@angular/router';

import { PilotsComponent } from './pilots.component';
import { PilotFormComponent } from "./pilot-form/pilot-form.component";

const pilotsRoutes: Routes = [
    { path: 'pilots/', component: PilotsComponent, pathMatch: 'full' },
    { path: 'pilots/new', component: PilotFormComponent },
    { path: 'pilots/:id', component: PilotFormComponent }
];

export const pilotsRouting = RouterModule.forChild(pilotsRoutes);
