import { Component, OnInit } from '@angular/core';
import { Departure } from './shared/departure';
import { DeparturesService } from './shared/departures.service';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent implements OnInit {
  private departures: Departure [];
  constructor(private departuresService: DeparturesService) {}

  ngOnInit() {
    this.departuresService.getDepartures().subscribe((data:Departure[])=>{this.departures = data});
  }

  deleteDeparture(departure) {
    if (confirm("Are you sure you want to delete departure with id "+ departure.id + "?")) {
     
      this.departuresService.deleteDeparture(departure.id)
        .subscribe(null,
        error => {
          alert("Could not delete departure.");
          
        }
      )
    }
  }
}
