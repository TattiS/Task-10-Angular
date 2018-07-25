import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from "rxjs";
import { map } from "rxjs/operators";
import { Pilot } from "./pilot";
@Injectable({
  providedIn: 'root'
})
export class PilotsService {
  private url: string = "http://localhost:62452/api/pilots"
  constructor(private http: HttpClient) { }

  getPilots(): Observable<Pilot[]> {
    return this.http.get(this.url).pipe(map(data=>{
     // let pilotsList = data["pilots"];
      return data["pilots"].map(function(pilot:any){
        return {id: pilot.Id, name: pilot.Name, surname: pilot.Surname, bithdate: pilot.BithDate, experience: pilot.Experience};
      });
    }));
  }

  getPilot(id) {
    return this.http.get(this.getUrlWithId(id));
  }

  addPilot(pilot) {
    return this.http.post(this.url, JSON.stringify(pilot));
  }

  updatePilot(pilot) {
    return this.http.put(this.getUrlWithId(pilot.id), JSON.stringify(pilot));
  }

  deletePilot(pilot) {
    return this.http.delete(this.getUrlWithId(pilot.id));
  }

  private getUrlWithId(id:number) {
    return this.url + "/" + id;
  }
}
