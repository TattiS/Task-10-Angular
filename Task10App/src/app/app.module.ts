import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { routing } from './routing';
import { MainValidator } from './shared/main-validator';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PilotsModule } from './pilots/pilots.module';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketFormComponent } from './tickets/ticket-form/ticket-form.component';
import { TicketDetailsComponent } from './tickets/ticket-details/ticket-details.component';
import { StewardessesComponent } from './stewardesses/stewardesses.component';
import { StewardessDetailsComponent } from './stewardesses/stewardess-details/stewardess-details.component';
import { StewardessFormComponent } from './stewardesses/stewardess-form/stewardess-form.component';
import { PlanesComponent } from './planes/planes.component';
import { PlaneDetailsComponent } from './planes/plane-details/plane-details.component';
import { PlaneFormComponent } from './planes/plane-form/plane-form.component';
import { PlaneTypesComponent } from './plane-types/plane-types.component';
import { PlaneTypeDetailsComponent } from './plane-types/plane-type-details/plane-type-details.component';
import { PlaneTypeFormComponent } from './plane-types/plane-type-form/plane-type-form.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightDetailsComponent } from './flights/flight-details/flight-details.component';
import { FlightFormComponent } from './flights/flight-form/flight-form.component';
import { DeparturesComponent } from './departures/departures.component';
import { DepartureFormComponent } from './departures/departure-form/departure-form.component';
import { DepartureDetailsComponent } from './departures/departure-details/departure-details.component';
import { CrewsComponent } from './crews/crews.component';
import { CrewDetailsComponent } from './crews/crew-details/crew-details.component';
import { CrewFormComponent } from './crews/crew-form/crew-form.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TicketsComponent,
    TicketFormComponent,
    TicketDetailsComponent,
    StewardessesComponent,
    StewardessDetailsComponent,
    StewardessFormComponent,
    PlanesComponent,
    PlaneDetailsComponent,
    PlaneFormComponent,
    PlaneTypesComponent,
    PlaneTypeDetailsComponent,
    PlaneTypeFormComponent,
    FlightsComponent,
    FlightDetailsComponent,
    FlightFormComponent,
    DeparturesComponent,
    DepartureFormComponent,
    DepartureDetailsComponent,
    CrewsComponent,
    CrewDetailsComponent,
    CrewFormComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PilotsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
