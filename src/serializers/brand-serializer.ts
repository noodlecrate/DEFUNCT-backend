import { ISerializer } from "./serializer.i";
import { BrandModel } from "../models/brand-model";

export class BrandSerializer
    implements ISerializer<BrandModel>
{

    public serialize(model: BrandModel): any {
        return {
            id: model.id,
            name: model.name
        };
    }

    public deserialize(json: any): BrandModel {
        return undefined;
    }

}
