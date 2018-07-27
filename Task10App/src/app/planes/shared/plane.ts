import { PlaneType } from "../../plane-types/shared/plane-type";

export class Plane {
    id: number;
    name: string;
    typeOfPlane: PlaneType;
    releaseDate: Date;
    operationalLife: number;
}
