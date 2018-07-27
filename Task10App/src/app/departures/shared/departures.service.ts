import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeparturesService {
  private url: string = "http://localhost:62452/api/departures";
  constructor(private http: HttpClient) { }
  
getDepartures() {
  return this.http.get(this.url);

}

getDeparture(id) {
  return this.http.get(this.getUrlWithId(id));
}

addDeparture(departure) {
  return this.http.post(this.url, JSON.stringify(departure),httpOptions);
}

updateDeparture(departure) {
  return this.http.put(this.getUrlWithId(departure.id), JSON.stringify(departure),httpOptions);
}

deleteDeparture(id) {
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