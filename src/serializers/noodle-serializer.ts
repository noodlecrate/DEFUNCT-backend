import { ISerializer } from "./serializer.i";
import { NoodleModel } from "../models/noodle-model";
import { CountrySerializer } from "./country-serializer";

export class NoodleSerializer
    implements ISerializer<NoodleModel>
{
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
            countryOfOrigin: this._countrySerializer.serialize((<any>model).countryOfOrigin)
        };
    }

    public deserialize(json: any): NoodleModel {
        return new NoodleModel(parseInt(json.id), json.name, json.description, json.imageUrl);
    }

}