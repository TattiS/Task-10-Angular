import { Routes, RouterModule } from '@angular/router';

import { PilotsComponent } from './pilots.component';
import { PilotFormComponent } from "./pilot-form/pilot-form.component";
import { PilotDetailsComponent } from "./pilot-details/pilot-details.component";

const pilotsRoutes: Routes = [
    { path: 'pilots/', component: PilotsComponent, pathMatch: 'full' },
    { path: 'pilots/new', component: PilotFormComponent },
    { path: 'pilots/:id', component: PilotFormComponent },
    { path: 'pilots/details:id', component: PilotDetailsComponent}
];

export const pilotsRouting = RouterModule.forChild(pilotsRoutes);
