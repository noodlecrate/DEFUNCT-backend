import { ISerializer } from "./serializer.i";
import { NoodleModel } from "../models/noodle-model";

export class NoodleSerializer
    implements ISerializer<NoodleModel>
{

    public serialize(model: NoodleModel): any {
        return {
            id: model.id,
            name: model.name,
            descriptioin: model.description,
            imageUrl: model.imageUrl,
            glutenFree: model.glutenFree,
            lactoseFree: model.lactoseFree,
            vegetarian: model.vegetarian,
            vegan: model.vegan
        };
    }

    public deserialize(json: any): NoodleModel {
        return new NoodleModel(parseInt(json.id), json.name, json.description, json.imageUrl);
    }

}
