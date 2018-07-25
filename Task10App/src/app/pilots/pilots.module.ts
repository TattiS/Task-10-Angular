import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PilotsComponent } from './pilots.component';
import { PilotsService } from './shared/pilots.service';
import { PilotFormComponent } from './pilot-form/pilot-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    PilotsComponent,
    PilotFormComponent
  ],
  exports: [
    PilotsComponent
  ],
  providers: [
    PilotsService
  ]
})
export class PilotsModule { }
