import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CrewsService {
  private url: string = "http://localhost:62452/api/crews";
  
  constructor(private http: HttpClient) { }
  
getCrews() {
  return this.http.get(this.url);

}

getCrew(id) {
  return this.http.get(this.getUrlWithId(id));
}

addCrew(crew) {
  return this.http.post(this.url, JSON.stringify(crew), httpOptions);
}

updateCrew(crew) {
  return this.http.put(this.getUrlWithId(crew.id), JSON.stringify(crew),httpOptions);
}

deleteCrew(id) {
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