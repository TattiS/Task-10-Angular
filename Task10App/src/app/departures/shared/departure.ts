import { Crew } from "../../crews/shared/crew";
import { Plane } from "../../planes/shared/plane";

export class Departure {
    id: number;
    flightId: number;
    departureDate: Date;
    crewItem: Crew;
    planeItem: Plane;
  }
 