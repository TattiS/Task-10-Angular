import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Pilot } from "./pilot";

@Injectable({
  providedIn: 'root'
})
export class PilotsService {
  private url: string = "http://localhost:62452/api/pilots";
  constructor(private http: HttpClient) { }

  getPilots() {
      return this.http.get(this.url);

  }

  getPilot(id) {
    return this.http.get(this.getUrlWithId(id));
  }

  addPilot(pilot) {
    return this.http.post(this.url, JSON.stringify(pilot),httpOptions);
  }

  updatePilot(pilot) {
    return this.http.put(this.getUrlWithId(pilot.id), JSON.stringify(pilot),httpOptions);
  }

  deletePilot(id) {
    return this.http.delete(this.getUrlWithId(id));
  }

  private getUrlWithId(id:number) {
    return this.url + "/" + id;
  }
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};