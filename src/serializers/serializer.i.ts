import { IModel } from "../models/model.i";

export interface ISerializer<TModel extends IModel> {

    serialize(model: TModel): any;
    deserialize(json: any): TModel;

}
