import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StewardessService {
  private url: string = "http://localhost:62452/api/stewardesses";
  constructor(private http: HttpClient) { }
  
getStewardesses() {
  return this.http.get(this.url);

}

getStewardess(id) {
  return this.http.get(this.getUrlWithId(id));
}

addStewardess(stewardess) {
  return this.http.post(this.url, JSON.stringify(stewardess),httpOptions);
}

updateStewardess(stewardess) {
  return this.http.put(this.getUrlWithId(stewardess.id), JSON.stringify(stewardess),httpOptions);
}

deleteStewardess(id) {
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