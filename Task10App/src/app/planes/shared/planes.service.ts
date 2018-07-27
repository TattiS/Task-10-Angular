import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {
  private url: string = "http://localhost:62452/api/planes";
  constructor(private http: HttpClient) { }
  
getPlanes() {
  return this.http.get(this.url);

}

getPlane(id) {
  return this.http.get(this.getUrlWithId(id));
}

addPlane(plane) {
  return this.http.post(this.url, JSON.stringify(plane),httpOptions);
}

updatePlane(plane) {
  return this.http.put(this.getUrlWithId(plane.id), JSON.stringify(plane),httpOptions);
}

deletePlane(id) {
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