import { Component, OnInit } from '@angular/core';
import { PlanesService } from './shared/planes.service';
import { Plane } from './shared/plane';



@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  private planes:Plane[];
  constructor(private planesService: PlanesService) { }

  ngOnInit() {
    this.planesService.getPlanes().subscribe((data:Plane[]) =>{ this.planes = data});
    
  }

  deletePlane(plane) {
    if (confirm("Are you sure you want to delete " + plane.name+ " with id "+ plane.id + "?")) {
     
      this.planesService.deletePlane(plane.id)
        .subscribe(null,
        error => {
          alert("Could not delete plane.");
          
        }
      )
    }
  }
}





