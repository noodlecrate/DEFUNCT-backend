import { ISerializer } from "./serializer.i";
import { NoodleModel } from "../models/noodle-model";
import { CountrySerializer } from "./country-serializer";
import { BrandSerializer } from "./brand-serializer";

export class NoodleSerializer
    implements ISerializer<NoodleModel>
{
    private _brandSerializer = new BrandSerializer();
    private _countrySerializer = new CountrySerializer();

    public serialize(model: NoodleModel): any {
        return {
            id: model.id,
            name: model.name,
            descriptioin: model.description,
            imageUrl: model.imageUrl,
            glutenFree: model.glutenFree,
            lactoseFree: model.lactoseFree,
            vegetarian: model.vegetarian,
            vegan: model.vegan,
            countryOfOrigin: this._countrySerializer.serialize(model.countryOfOrigin),
            brand: this._brandSerializer.serialize(model.brand)
        };
    }

    public deserialize(json: any): NoodleModel {
        return undefined;
    }

}
