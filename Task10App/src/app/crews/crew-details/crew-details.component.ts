import { Component, OnInit } from '@angular/core';
import { Crew } from '../shared/crew';
import { ActivatedRoute, Router } from '@angular/router';
import { CrewsService } from '../shared/crews.service';

@Component({
  selector: 'app-crew-details',
  templateUrl: './crew-details.component.html',
  styleUrls: ['./crew-details.component.css']
})

export class CrewDetailsComponent implements OnInit {
private crew : Crew = new Crew();
  constructor(private route: ActivatedRoute, private router: Router, private crewsService: CrewsService) { }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('id');
    this.crewsService.getCrew(index).subscribe((data:Crew)=>this.crew=data);
  }

  gotoCrews() {
    this.router.navigate(['/crews']);
  }
}
