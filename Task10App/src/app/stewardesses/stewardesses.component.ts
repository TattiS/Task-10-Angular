import { Component, OnInit } from '@angular/core';
import { StewardessService } from './shared/stewardess.service';
import { Stewardess } from './shared/stewardess';

@Component({
  selector: 'app-stewardesses',
  templateUrl: './stewardesses.component.html',
  styleUrls: ['./stewardesses.component.css']
})
export class StewardessesComponent implements OnInit {
  private stewardesses: Stewardess[];
  constructor(private stewardessesService: StewardessService) { }

  ngOnInit() {
    this.stewardessesService.getStewardesses().subscribe((data:Stewardess[])=>{this.stewardesses = data});
  }

  deleteStewardess(stewardess) {
    if (confirm("Are you sure you want to delete stewardess with id "+ stewardess.id + "?")) {
     
      this.stewardessesService.deleteStewardess(stewardess.id)
        .subscribe(null,
        error => {
          alert("Could not delete stewardess.");
          
        }
      )
    }
  }
}
