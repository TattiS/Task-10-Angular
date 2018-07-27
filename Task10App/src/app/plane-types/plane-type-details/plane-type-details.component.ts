import { Component, OnInit } from '@angular/core';
import { PlaneType } from '../shared/plane-type';
import { ActivatedRoute, Router } from '@angular/router';
import { TypesService } from '../shared/types.service';

@Component({
  selector: 'app-plane-type-details',
  templateUrl: './plane-type-details.component.html',
  styleUrls: ['./plane-type-details.component.css']
})
export class PlaneTypeDetailsComponent implements OnInit {
private type = new PlaneType();

  constructor(private route: ActivatedRoute, private router: Router, private typesService: TypesService) { }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('id');
    this.typesService.getType(index).subscribe((data:PlaneType)=>{this.type=data});
   console.log(index);
  }

  gotoTypes(){
    this.router.navigate(['/types']);
  }
}
