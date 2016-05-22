import { ISerializer } from "./serializer.i";
import { CountryModel } from "../models/country-model";

export class CountrySerializer
    implements ISerializer<CountryModel>
{

    public serialize(model: CountryModel): any {
        return {
            id: model.id,
            name: model.name
        };
    }

    public deserialize(json: any): CountryModel {
        return undefined;
    }

}
