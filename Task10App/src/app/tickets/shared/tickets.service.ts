import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private url: string = "http://localhost:62452/api/tickets";
  private ticket:Ticket;
  constructor(private http: HttpClient) { }

getTickets() {
    return this.http.get(this.url);
}
getTicket(id) {
  return this.http.get(this.getUrlWithId(id));
  
}

addTicket(ticket) {
  return this.http.post(this.url, JSON.stringify(ticket));
}

updateTicket(ticket) {
  return this.http.put(this.getUrlWithId(ticket.id), JSON.stringify(ticket));
}

deleteTicket(id) {
  return this.http.delete(this.getUrlWithId(id));
}

private getUrlWithId(id:number) {
  return this.url + "/" + id;
}
}
