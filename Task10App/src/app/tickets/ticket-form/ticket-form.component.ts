import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ticket } from '../shared/ticket';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketsService } from '../shared/tickets.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {
  form: FormGroup;
  title: string;
  ticket: Ticket = new Ticket();
  constructor(formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ticketsService: TicketsService) {
      this.form = formBuilder.group({
        id:[' ', [Validators.required, Validators.min(1)]],
        price: [' ', [Validators.required, Validators.min(0.01)]],
        flightId: [' ', [Validators.required, Validators.min(1)]]
      });
     }

  ngOnInit() {
    let id = this.route.params.subscribe(
      params => {
        let id = params['id'];

        this.title = id ? 'Update Ticket' : 'New Ticket';

        if (!id) {
          return;
        }
          this.ticketsService.getTicket(id)
            .subscribe(
              (data: Ticket) => this.ticket = data,
               response => {
              if (response.status == 404) {
                this.router.navigate(['tickets']);
              }
            }
            );
        }
     
    );
  }

  save() {
    let result,
      ticketValue = this.form.value;
    if (ticketValue.id) {
      result = this.ticketsService.updateTicket(ticketValue);
    } else {
      result = this.ticketsService.addTicket(ticketValue);
    }
    result.subscribe(p => this.router.navigate(['tickets']));
  }

  gotoTickets(){
    this.router.navigate(['/tickets']);
  }
}
