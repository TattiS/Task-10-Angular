import { Component, OnInit } from '@angular/core';
import { PilotsService } from './shared/pilots.service';
import { Pilot } from './shared/pilot';
import { PilotDetailsComponent } from "./pilot-details/pilot-details.component";
import { AppComponent } from '../app.component';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {
  private pilots:Pilot[];
 constructor(private pilotsService: PilotsService) { }

  ngOnInit() {
    this.pilotsService.getPilots().subscribe((data:Pilot[]) =>{ this.pilots = data});
    
  }
  
  public get Length() : number {
    return this.pilots.length;
  }
  
  deletePilot(pilot) {
    if (confirm("Are you sure you want to delete " + pilot.name+ " with id "+ pilot.id + "?")) {
     
      this.pilotsService.deletePilot(pilot.id)
        .subscribe(null,
        error => {
          alert("Could not delete pilot.");
          
        }
      )
    }
  }
}
