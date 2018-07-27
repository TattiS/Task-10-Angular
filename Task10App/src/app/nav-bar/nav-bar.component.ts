import { Component, OnInit } from '@angular/core';
import { pilotsRouting } from '../pilots/pilots.routing';
import { RouterModule} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 private pilotPath:string;
  constructor() {
    
   }

  ngOnInit() {
    
  }

}
