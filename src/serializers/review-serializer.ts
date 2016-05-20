import { ISerializer } from "./serializer.i";
import { ReviewModel } from "../models/review-model";
import { UserSerializer } from "./user-serializer";
import { NoodleSerializer } from "./noodle-serializer";
import { RatingSerializer } from "./rating-serializer";

let userSerializer = new UserSerializer();
let noodleSerializer = new NoodleSerializer();
let ratingSerializer = new RatingSerializer();

export class ReviewSerializer
    implements ISerializer<ReviewModel>
{

    public serialize(model: ReviewModel): any {
        return {
            id: model.id,
            title: model.title,
            body: model.body,
            rating: ratingSerializer.serialize(model.rating),
            imageUrl: model.imageUrl,
            author: userSerializer.serialize((<any>model).author),
            noodle: noodleSerializer.serialize((<any>model).noodle)
        };
    }

    public deserialize(json: any): ReviewModel {
        return new ReviewModel(parseInt(json.id), json.title, json.body, json.score, json.imageUrl);
    }

}
