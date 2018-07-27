import { Component, OnInit } from '@angular/core';
import { Flight } from '../shared/flight';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightsService } from '../shared/flights.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
private flight:Flight = new Flight();
  constructor(private route: ActivatedRoute, private router: Router, private flightsService: FlightsService) { }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('id');
    this.flightsService.getFlight(index).subscribe((data:Flight)=>this.flight=data);
  }

  gotoFlights() {
    this.router.navigate(['/flights']);
  }
}
