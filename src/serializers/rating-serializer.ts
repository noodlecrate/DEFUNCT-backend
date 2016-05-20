import { ISerializer } from "./serializer.i";
import { RatingModel } from "../models/rating-model";

export class RatingSerializer
    implements ISerializer<RatingModel>
{

    public serialize(model: RatingModel): any {
        return {
            id: model.id,
            overall: model.overall,
            spice: model.spice,
            umami: model.umami,
            fortitude: model.fortitude
        };
    }

    public deserialize(json: any): RatingModel {
        return new RatingModel(parseInt(json.id), parseInt(json.overall), parseInt(json.spice), parseInt(json.umami), parseInt(json.fortitude));
    }

}
