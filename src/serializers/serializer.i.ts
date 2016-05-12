export interface ISerializer<TModel> {

    serialize(model: TModel): any;
    deserialize(json: any): TModel;

}
