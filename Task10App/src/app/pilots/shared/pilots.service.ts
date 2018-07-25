import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PilotsService {
  private url: string = "http://localhost:62452/pilots"
  constructor(private http: HttpClient) { }

  getPilots() {
    return this.http.get(this.url);
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

  private getUrlWithId(id) {
    return this.url + "/" + id;
  }
}
