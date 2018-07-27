import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Departure } from '../shared/departure';
import { DeparturesService } from '../shared/departures.service';


@Component({
  selector: 'app-departure-form',
  templateUrl: './departure-form.component.html',
  styleUrls: ['./departure-form.component.css']
})
export class DepartureFormComponent implements OnInit {
  form: FormGroup;
  title: string;
  departure: Departure = new Departure();
  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private departuresService: DeparturesService
  ) { 
    this.form = formBuilder.group({
      id:[' ', [Validators.required, Validators.min(1)]],
      flightId: [' ', [Validators.required, Validators.min(1)]],
      departureDate: [' ', [Validators.required]],
      crewItem:formBuilder.group({
        id: [' '],
        pilotId: [' '],
        stewardesses: [' ']
      }),
      planeItem:formBuilder.group({
        id: [' '],
        name: [' '],
        typeOfPlane: [' '],
        releaseDate: [' '],
        operationalLife: [' ']
      })
    });
  }
  ngOnInit() {
    let id = this.route.params.subscribe(
      params => {
        let id = params['id'];

        this.title = id ? 'Update Departure' : 'New Departure';

        if (!id) {
          return;
        }
          this.departuresService.getDeparture(id)
            .subscribe(
              (data: Departure) => this.departure = data,
            response => {
              if (response.status == 404) {
                this.router.navigate(['departures']);
              }
            }
            );
        }
     
    );
  }

  save() {
    let result,
      departureValue = this.form.value;
    if (departureValue.id) {
      result = this.departuresService.updateDeparture(departureValue);
    } else {
      result = this.departuresService.addDeparture(departureValue);
    }
    result.subscribe(p => this.router.navigate(['departures']));
  }
}
