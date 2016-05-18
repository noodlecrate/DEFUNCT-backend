export class NoodleModel {

    public id: number;
    public name: string;
    public description: string;
    public imageUrl: string;
    public glutenFree: boolean = false;
    public lactoseFree: boolean = false;
    public vegetarian: boolean = false;
    public vegan: boolean = false;

    constructor (id: number, name: string, description: string, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}
