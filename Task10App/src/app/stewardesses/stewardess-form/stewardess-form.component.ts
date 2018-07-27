import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Stewardess } from '../shared/stewardess';
import { Router, ActivatedRoute } from '@angular/router';
import { StewardessService } from '../shared/stewardess.service';

@Component({
  selector: 'app-stewardess-form',
  templateUrl: './stewardess-form.component.html',
  styleUrls: ['./stewardess-form.component.css']
})
export class StewardessFormComponent implements OnInit {
  form: FormGroup;
  title: string;
  stewardess:Stewardess = new Stewardess();
  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private stewardessesService: StewardessService
  ) { 
    this.form = formBuilder.group({
      id:[],
      name: [' ', [Validators.required, Validators.maxLength(50)]],
      surname: [' ', [Validators.required, Validators.maxLength(50)]],
      birthdate: [' '],
      crewId:[' ',[Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
    let id = this.route.params.subscribe(
      params => {
        let id = params['id'];

        this.title = id ? 'Update Stewardess' : 'New Stewardess';

        if (!id) {
          return;
        }
          this.stewardessesService.getStewardess(id)
            .subscribe(
              (data: Stewardess) => this.stewardess = data,
            response => {
              if (response.status == 404) {
                this.router.navigate(['stewardess']);
              }
            }
            );
        }
     
    );
  }

  save() {
    let result,
      stewardessValue = this.form.value;
    if (stewardessValue.id) {
      result = this.stewardessesService.updateStewardess(stewardessValue);
    } else {
      result = this.stewardessesService.addStewardess(stewardessValue);
    }
    result.subscribe(p => this.router.navigate(['stewardess']));
  }

}
