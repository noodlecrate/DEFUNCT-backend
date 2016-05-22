import { CountryModel } from "./country-model";
import { BrandModel } from "./brand-model";

export class NoodleModel {

    public id: number;
    public name: string;
    public description: string;
    public imageUrl: string;
    public glutenFree: boolean = false;
    public lactoseFree: boolean = false;
    public vegetarian: boolean = false;
    public vegan: boolean = false;
    public countryOfOrigin: CountryModel;
    public brand: BrandModel;

    constructor (id: number, name: string, description: string, imageUrl: string, countryOfOrigin: CountryModel, brand: BrandModel) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.countryOfOrigin = countryOfOrigin;
        this.brand = brand;
    }
}
