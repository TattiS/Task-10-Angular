import { Component, OnInit } from '@angular/core';
import { Flight } from './shared/flight';
import { FlightsService } from './shared/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  private flights:Flight[];
  constructor(private flightsService: FlightsService) { }
  

  ngOnInit() {
    this.flightsService.getFlights().subscribe((data:Flight[])=>{this.flights = data});
  }

  deleteFlight(flight) {
    if (confirm("Are you sure you want to delete flight with id "+ flight.id + "?")) {
     
      this.flightsService.deleteFlight(flight.id)
        .subscribe(null,
        error => {
          alert("Could not delete flight.");
          
        }
      )
    }
  }
}
