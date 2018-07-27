import { Component, OnInit } from '@angular/core';
import { Crew } from './shared/crew';
import { CrewsService } from './shared/crews.service';

@Component({
  selector: 'app-crews',
  templateUrl: './crews.component.html',
  styleUrls: ['./crews.component.css']
})
export class CrewsComponent implements OnInit {
private crews:Crew[];
  constructor(private crewsService: CrewsService) { }

  ngOnInit() {
    this.crewsService.getCrews().subscribe((data:Crew[])=>{this.crews = data});
  }

  deleteCrew(crew) {
    if (confirm("Are you sure you want to delete crew with id "+ crew.id + "?")) {
     
      this.crewsService.deleteCrew(crew.id)
        .subscribe(null,
        error => {
          alert("Could not delete crew.");
          
        }
      )
    }
  }
}
