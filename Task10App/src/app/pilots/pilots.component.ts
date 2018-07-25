import { Component, OnInit } from '@angular/core';
import { PilotsService } from './shared/pilots.service';
import { Pilot } from './shared/pilot';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {
  private pilots: Pilot[] = [];
  constructor(private pilotsService: PilotsService) { }

  ngOnInit() {
    this.pilotsService.getPilots()
      .subscribe(data => this.pilots = data);
  }
  showDetails(pilot){
   
  }
  deletePilot(pilot) {
    if (confirm("Are you sure you want to delete " + pilot.name + "?")) {
      let index = this.pilots.indexOf(pilot);
      this.pilots.splice(index, 1);

      this.pilotsService.deletePilot(pilot.id)
        .subscribe(null,
        error => {
          alert("Could not delete pilot.");
          this.pilots.splice(index, 0, pilot);
        }
      )
    }
  }
}
