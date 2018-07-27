import { Component, OnInit } from '@angular/core';
import { Stewardess } from '../shared/stewardess';
import { ActivatedRoute, Router } from '@angular/router';
import { StewardessService } from '../shared/stewardess.service';

@Component({
  selector: 'app-stewardess-details',
  templateUrl: './stewardess-details.component.html',
  styleUrls: ['./stewardess-details.component.css']
})
export class StewardessDetailsComponent implements OnInit {
private stewardess :Stewardess = new Stewardess();
  constructor(private route: ActivatedRoute, private router: Router, private stewardessesService: StewardessService) { }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('id');
   this.stewardessesService.getStewardess(index).subscribe((data:Stewardess)=>this.stewardess=data);
   
  }
  gotoStewardesses() {
    this.router.navigate(['/stewardesses']);
  }
}
