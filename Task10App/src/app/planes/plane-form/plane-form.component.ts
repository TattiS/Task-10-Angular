import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Plane } from '../shared/plane';
import { Router, ActivatedRoute } from '@angular/router';
import { PlanesService } from '../shared/planes.service';

@Component({
  selector: 'app-plane-form',
  templateUrl: './plane-form.component.html',
  styleUrls: ['./plane-form.component.css']
})
export class PlaneFormComponent implements OnInit {
  form: FormGroup;
  title: string;
  plane: Plane = new Plane();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private planesService: PlanesService
  ) { 
    this.form =this.formBuilder.group({
      id:[' ', [Validators.required, Validators.min(1)]],
      name: [' ', [Validators.required, Validators.maxLength(50)]],
      releaseDate: [' ', [Validators.required, Validators.maxLength(50)]],
      operationalLife: [],
      typeOfPlane:formBuilder.group({
        id: [''],
        model: [''],
        seats: [''],
        airlift: ['']
      }),
    });
  }

  ngOnInit() {
    let id = this.route.params.subscribe(
      params => {
        let id = params['id'];

        this.title = id ? 'Update Plane' : 'New Plane';

        if (!id) {
          return;
        }
          this.planesService.getPlane(id)
            .subscribe(
              (data: Plane) => this.plane = data,
            response => {
              if (response.status == 404) {
                this.router.navigate(['planes']);
              }
            }
            );
        }
     
    );
  }

  save() {
    let result,
      planeValue = this.form.value;
    if (planeValue.id) {
      result = this.planesService.updatePlane(planeValue);
    } else {
      result = this.planesService.addPlane(planeValue);
    }
    result.subscribe(p => this.router.navigate(['planes']));
  }

  
  gotoPlanes() {
    this.router.navigate(['/planes']);
  }
}
