import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private url: string = "http://localhost:62452/api/flights";
  constructor(private http: HttpClient) { }
  
getFlights() {
  return this.http.get(this.url);

}

getFlight(id) {
  return this.http.get(this.getUrlWithId(id));
}

addFlight(flight) {
  return this.http.post(this.url, JSON.stringify(flight));
}

updateFlight(flight) {
  return this.http.put(this.getUrlWithId(flight.id), JSON.stringify(flight));
}

deleteFlight(id) {
  return this.http.delete(this.getUrlWithId(id));
}

private getUrlWithId(id:number) {
  return this.url + "/" + id;
}
}
