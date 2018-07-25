import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { routing } from './/routing';
import { MainValidator } from './shared/main-validator';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PilotsModule } from './pilots/pilots.module';
import { pilotsRouting } from './pilots/pilots.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
    
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
