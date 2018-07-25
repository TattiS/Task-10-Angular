import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { routing } from './/routing';
import { PilotFormComponent } from './pilots/pilot-form/pilot-form.component';
import { MainValidator } from './shared/main-validator';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PilotsModule } from './pilots/pilots.module';
import { pilotsRouting } from './pilots/pilots.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PilotsModule,
    pilotsRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
