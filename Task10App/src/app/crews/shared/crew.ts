import { Stewardess } from "../../stewardesses/shared/stewardess";

export class Crew {
    id: number;
    pilotId: number;
    stewardesses: Array<Stewardess>;
  }