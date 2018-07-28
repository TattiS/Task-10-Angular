import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlaneType } from '../shared/plane-type';
import { TypesService } from '../shared/types.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plane-type-form',
  templateUrl: './plane-type-form.component.html',
  styleUrls: ['./plane-type-form.component.css']
})
export class PlaneTypeFormComponent implements OnInit {
form:FormGroup;
title:string;
type:PlaneType = new PlaneType();
  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private typesService: TypesService
  ) {
    this.form = formBuilder.group({
      id:[' ', [Validators.required, Validators.min(1)]],
      model: [' ', [Validators.required]],
      seats: [' ', [Validators.required, Validators.min(1)]],
      airlift: [' ', [Validators.required, Validators.min(1)]]
    });
   }

  ngOnInit() {
    let id = this.route.params.subscribe(
      params => {
        let id = params['id'];

        this.title = id ? 'Update Plane Type' : 'New Plane Type';

        if (!id) {
          return;
        }
          this.typesService.getType(id)
            .subscribe(
              (data: PlaneType) => this.type = data,
               response => {
              if (response.status == 404) {
                this.router.navigate(['types']);
              }
            }
            );
        }
     
    );
  }
  save() {
    let result,
      typeValue = this.form.value;
    if (typeValue.id) {
      result = this.typesService.updateType(typeValue);
    } else {
      result = this.typesService.addType(typeValue);
    }
    result.subscribe(p => this.router.navigate(['types']));
  }

  gotoTypes(){
    this.router.navigate(['/types']);
  }
}
