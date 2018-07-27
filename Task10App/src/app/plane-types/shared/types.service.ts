import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypesService {
  private url: string = "http://localhost:62452/api/planetypes";
  constructor(private http: HttpClient) { }
  
getTypes() {
  return this.http.get(this.url);

}

getType(id) {
  return this.http.get(this.getUrlWithId(id));
}

addType(type) {
  return this.http.post(this.url, JSON.stringify(type),httpOptions);
}

updateType(type) {
  return this.http.put(this.getUrlWithId(type.id), JSON.stringify(type),httpOptions);
}

deleteType(id) {
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