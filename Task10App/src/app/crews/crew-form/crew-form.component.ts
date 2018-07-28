import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Crew } from '../shared/crew';
import { CrewsService } from '../shared/crews.service';


@Component({
  selector: 'app-crew-form',
  templateUrl: './crew-form.component.html',
  styleUrls: ['./crew-form.component.css']
})
export class CrewFormComponent implements OnInit {
  form: FormGroup;
  title: string;
  crew: Crew = new Crew();
  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private crewsService: CrewsService
  ) { 
    this.form = formBuilder.group({
      id:[' ', [Validators.required, Validators.min(1)]],
      pilotId: [' ', [Validators.required, Validators.min(1)]],
      stewardesses:formBuilder.group({
        id: [' '],
        
      }),
      
    });
  }

  ngOnInit() {
    let id = this.route.params.subscribe(
      params => {
        let id = params['id'];

        this.title = id ? 'Update Crew' : 'New Crew';

        if (!id) {
          return;
        }
          this.crewsService.getCrew(id)
            .subscribe(
              (data: Crew) => this.crew = data,
            response => {
              if (response.status == 404) {
                this.router.navigate(['crews']);
              }
            }
            );
        }
     
    );
  }
  save() {
    let result,
      crewValue = this.form.value;
    if (crewValue.id) {
      result = this.crewsService.updateCrew(crewValue);
    } else {
      result = this.crewsService.addCrew(crewValue);
    }
    result.subscribe(p => this.router.navigate(['crews']));
  }
  gotoCrews() {
    this.router.navigate(['/crews']);
  }
}
