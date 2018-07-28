import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Flight } from '../shared/flight';
import { Router, ActivatedRoute } from '@angular/router';
import { FlightsService } from '../shared/flights.service';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css']
})
export class FlightFormComponent implements OnInit {
  form: FormGroup;
  title: string;
  flight: Flight = new Flight();
  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private flightsService: FlightsService
  ) {
    this.form = formBuilder.group({
      id:[' ', [Validators.required, Validators.min(1)]],
      departurePoint: [' ', [Validators.required, Validators.maxLength(50)]],
      destination: [' ', [Validators.required, Validators.maxLength(50)]],
      departureTime: [' '],
      arrivalTime: [' '],
      tickets:formBuilder.group({
        ticket:formBuilder.group({
        id: [' '],
        price: [' '],
        flightId: [' ']
        })
      }),
    });
   }

  ngOnInit() {
    let id = this.route.params.subscribe(
      params => {
        let id = params['id'];

        this.title = id ? 'Update Flight' : 'New Flight';

        if (!id) {
          return;
        }
          this.flightsService.getFlight(id)
            .subscribe(
              (data: Flight) => this.flight = data,
            response => {
              if (response.status == 404) {
                this.router.navigate(['flights']);
              }
            }
            );
        }
     
    );
  }

  save() {
    let result,
      flightValue = this.form.value;
    if (flightValue.id) {
      result = this.flightsService.updateFlight(flightValue);
    } else {
      result = this.flightsService.addFlight(flightValue);
    }
    result.subscribe(p => this.router.navigate(['planes']));
  }

  gotoFlights() {
    this.router.navigate(['/flights']);
  }
}
