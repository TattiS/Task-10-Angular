import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Airport';
  _msg = "";
 
 public get Message() : string {
   return this._msg
 }
  
  public set Message(v : string) {
    this._msg = v;
  }
  
}

