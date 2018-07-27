import { Component, OnInit } from '@angular/core';
import { Plane } from '../shared/plane';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanesService } from '../shared/planes.service';

@Component({
  selector: 'app-plane-details',
  templateUrl: './plane-details.component.html',
  styleUrls: ['./plane-details.component.css']
})
export class PlaneDetailsComponent implements OnInit {
private plane:Plane = new Plane();
  constructor(private route: ActivatedRoute, private router: Router, private planesService: PlanesService) { }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('id');
    this.planesService.getPlane(index).subscribe((data:Plane)=>this.plane=data);
  }

  gotoPlanes() {
    this.router.navigate(['/planes']);
  }
}
