import { Component, OnInit } from '@angular/core';
import { Ticket } from './shared/ticket';
import { TicketsService } from './shared/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  private tickets:Ticket[];
  constructor(private ticketsService:TicketsService) { }

  ngOnInit() {
    this.ticketsService.getTickets().subscribe((data:Ticket[])=>{this.tickets = data});
  }

    
  deleteTicket(ticket) {
    if (confirm("Are you sure you want to delete ticket with id "+ ticket.id + "?")) {
     
      this.ticketsService.deleteTicket(ticket.id)
        .subscribe(null,
        error => {
          alert("Could not delete ticket.");
          
        }
      )
    }
  }
}
