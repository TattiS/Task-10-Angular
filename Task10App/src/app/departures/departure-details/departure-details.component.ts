import { Component, OnInit } from '@angular/core';
import { Departure } from '../shared/departure';
import { DeparturesService } from '../shared/departures.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departure-details',
  templateUrl: './departure-details.component.html',
  styleUrls: ['./departure-details.component.css']
})
export class DepartureDetailsComponent implements OnInit {
private departure :Departure = new Departure();
  constructor(private route: ActivatedRoute, private router: Router, private departuresService: DeparturesService) { }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('id');
    this.departuresService.getDeparture(index).subscribe((data:Departure)=>this.departure=data);
  }

  gotoDepartures() {
    this.router.navigate(['/departures']);
  }
}
