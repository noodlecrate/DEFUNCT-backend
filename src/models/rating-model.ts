import { IModel } from "./model.i";

export class RatingModel implements IModel {

    public id: number;
    public overall: number;
    public spice: number;
    public umami: number;
    public fortitude: number;

    constructor (id: number, overall: number, spice: number, umami: number, fortitude: number) {
        this.id = id;
        this.overall = overall;
        this.spice = spice;
        this.umami = umami;
        this.fortitude = fortitude;
    }
}
