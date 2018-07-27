import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PilotsComponent } from './pilots.component';
import { PilotsService } from './shared/pilots.service';
import { PilotFormComponent } from './pilot-form/pilot-form.component';
import { PilotDetailsComponent } from './pilot-details/pilot-details.component';

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
    PilotFormComponent,
    PilotDetailsComponent
  ],
  exports: [
    PilotsComponent,
    PilotFormComponent,
    PilotDetailsComponent
  ],
  providers: [
    PilotsService
  ]
})
export class PilotsModule { }
