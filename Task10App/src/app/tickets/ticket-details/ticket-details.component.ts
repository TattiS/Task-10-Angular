import { Component, OnInit } from '@angular/core';
import { Ticket } from '../shared/ticket';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketsService } from '../shared/tickets.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  private ticket = new Ticket();
  constructor(private route: ActivatedRoute, private router: Router, private ticketsService: TicketsService) { }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('id');
    this.ticketsService.getTicket(index).subscribe((data:Ticket)=>{this.ticket=data});
   
  }

  gotoTickets(){
    this.router.navigate(['/tickets']);
  }
}
