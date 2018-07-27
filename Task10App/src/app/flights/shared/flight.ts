import { Ticket } from "../../tickets/shared/ticket";

export class Flight {
    id: number;
    departurePoint: string;
    departureTime: Date;
    destination: string;
    arrivalTime: Date;
    tickets: Array<Ticket>;
  }
  