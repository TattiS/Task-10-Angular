import { Component, OnInit } from '@angular/core';
import { Pilot } from "../shared/pilot";
import { PilotsService } from '../shared/pilots.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Component({
  selector: 'app-pilot-details',
  templateUrl: './pilot-details.component.html',
  styleUrls: ['./pilot-details.component.css']
})

export class PilotDetailsComponent implements OnInit {
  private pilot:Pilot;
  constructor(private route: ActivatedRoute, private router: Router, private pilotsService: PilotsService) { }

  ngOnInit() {
   let index = this.route.snapshot.paramMap.get('id');
   this.pilotsService.getPilot(index).subscribe((data:Pilot)=>this.pilot=data);
   
  }

  gotoPilots() {
    this.router.navigate(['/pilots']);
  }
}
