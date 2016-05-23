import { IModel } from "./model.i";

export class BrandModel implements IModel {

    public id: number;
    public name: string;

    constructor (id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
