import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Pilot } from '../shared/pilot';
import { PilotsService } from '../shared/pilots.service';
import { MainValidator } from '../../shared/main-validator'

@Component({
  selector: 'app-pilot-form',
  templateUrl: './pilot-form.component.html',
  styleUrls: ['./pilot-form.component.css']
})

export class PilotFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  pilot: Pilot = new Pilot();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private pilotsService: PilotsService
  ) {
    this.form = formBuilder.group({
      id:[],
      name: [' ', [Validators.required, Validators.maxLength(50)]],
      surname: [' ', [Validators.required, Validators.maxLength(50)]],
      birthdate: [],
      experience:[]
    });
  }

  ngOnInit() {
    let id = this.route.params.subscribe(
      params => {
        let id = params['id'];

        this.title = id ? 'Update Pilot' : 'New Pilot';

        if (!id) {
          return;
        }
          this.pilotsService.getPilot(id)
            .subscribe(
              (data: Pilot) => this.pilot = data,
            response => {
              if (response.status == 404) {
                this.router.navigate(['pilots']);
              }
            }
            );
        }
     
    );
   
  }

  save() {
    let result,
      pilotValue = this.form.value;
    if (pilotValue.id) {
      result = this.pilotsService.updatePilot(pilotValue);
    } else {
      result = this.pilotsService.addPilot(pilotValue);
    }
    result.subscribe(p => this.router.navigate(['pilots']));
  }

}
