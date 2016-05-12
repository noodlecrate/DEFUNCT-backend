import { ISerializer } from "./serializer.i";
import { ReviewModel } from "../models/review-model";

export class ReviewSerializer
    implements ISerializer<ReviewModel>
{

    public serialize(model: ReviewModel): any {
        return {
            title: model.getTitle(),
            body: model.getBody(),
            score: model.getScore()
        }
    }

    public deserialize(json: any): ReviewModel {
        return new ReviewModel(json.title, json.body, json.score);
    }

}
