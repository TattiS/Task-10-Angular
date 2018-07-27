import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PilotsComponent } from './pilots/pilots.component';
import { PilotFormComponent } from './pilots/pilot-form/pilot-form.component';
import { PilotDetailsComponent } from './pilots/pilot-details/pilot-details.component';
import { TicketDetailsComponent } from './tickets/ticket-details/ticket-details.component';
import { TicketFormComponent } from './tickets/ticket-form/ticket-form.component';
import { TicketsComponent } from './tickets/tickets.component';
import { PlaneDetailsComponent } from './planes/plane-details/plane-details.component';
import { PlaneFormComponent } from './planes/plane-form/plane-form.component';
import { PlanesComponent } from './planes/planes.component';
import { StewardessDetailsComponent } from './stewardesses/stewardess-details/stewardess-details.component';
import { StewardessFormComponent } from './stewardesses/stewardess-form/stewardess-form.component';
import { StewardessesComponent } from './stewardesses/stewardesses.component';
import { PlaneTypeDetailsComponent } from './plane-types/plane-type-details/plane-type-details.component';
import { PlaneTypeFormComponent } from './plane-types/plane-type-form/plane-type-form.component';
import { PlaneTypesComponent } from './plane-types/plane-types.component';
import { FlightDetailsComponent } from './flights/flight-details/flight-details.component';
import { FlightFormComponent } from './flights/flight-form/flight-form.component';
import { FlightsComponent } from './flights/flights.component';
import { DepartureDetailsComponent } from './departures/departure-details/departure-details.component';
import { DepartureFormComponent } from './departures/departure-form/departure-form.component';
import { DeparturesComponent } from './departures/departures.component';
import { CrewDetailsComponent } from './crews/crew-details/crew-details.component';
import { CrewFormComponent } from './crews/crew-form/crew-form.component';
import { CrewsComponent } from './crews/crews.component';


const appRoutes: Routes = [
 // { path: '', pathMatch: 'full', component: HomeComponent }
 { path: 'pilots/details/:id', component: PilotDetailsComponent},
 { path: 'pilots/new', component: PilotFormComponent },
 { path: 'pilots/:id', component: PilotFormComponent },   
 { path: 'pilots', component: PilotsComponent, pathMatch: 'full' },
 { path: 'tickets/details/:id', component: TicketDetailsComponent},
 { path: 'tickets/new', component: TicketFormComponent },
 { path: 'tickets/:id', component: TicketFormComponent },   
 { path: 'tickets', component: TicketsComponent, pathMatch: 'full' },
 { path: 'planes/details/:id', component: PlaneDetailsComponent},
 { path: 'planes/new', component: PlaneFormComponent },
 { path: 'planes/:id', component: PlaneFormComponent },   
 { path: 'planes', component: PlanesComponent, pathMatch: 'full' },
 { path: 'stewardesses/details/:id', component: StewardessDetailsComponent},
 { path: 'stewardesses/new', component: StewardessFormComponent },
 { path: 'stewardesses/:id', component: StewardessFormComponent },   
 { path: 'stewardesses', component: StewardessesComponent, pathMatch: 'full' },
 { path: 'types/details/:id', component: PlaneTypeDetailsComponent},
 { path: 'types/new', component: PlaneTypeFormComponent },
 { path: 'types/:id', component: PlaneTypeFormComponent },   
 { path: 'types', component: PlaneTypesComponent, pathMatch: 'full' },
 { path: 'flights/details/:id', component: FlightDetailsComponent},
 { path: 'flights/new', component: FlightFormComponent },
 { path: 'flights/:id', component: FlightFormComponent },   
 { path: 'flights', component: FlightsComponent, pathMatch: 'full' },
 { path: 'departures/details/:id', component: DepartureDetailsComponent},
 { path: 'departures/new', component: DepartureFormComponent },
 { path: 'departures/:id', component: DepartureFormComponent },   
 { path: 'departures', component: DeparturesComponent, pathMatch: 'full' },
 { path: 'crews/details/:id', component: CrewDetailsComponent},
 { path: 'crews/new', component: CrewFormComponent },
 { path: 'crews/:id', component: CrewFormComponent },   
 { path: 'crews', component: CrewsComponent, pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
