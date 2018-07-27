import { Component, OnInit } from '@angular/core';
import { PlaneType } from './shared/plane-type';
import { TypesService } from './shared/types.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plane-types',
  templateUrl: './plane-types.component.html',
  styleUrls: ['./plane-types.component.css']
})
export class PlaneTypesComponent implements OnInit {
  private types:PlaneType[];
  private router: Router;
  constructor(private typesService:TypesService) { }

  ngOnInit() {
    this.typesService.getTypes().subscribe((data:PlaneType[])=>{this.types = data});
  }

  deleteType(type) {
    if (confirm("Are you sure you want to delete plane type with id "+ type.id + "?")) {
     
      this.typesService.deleteType(type.id)
        .subscribe(null,
        error => {
          alert("Could not delete plane type.");
          
        }
      )
    }

  }

}
