import { RatingModel } from "./rating-model";

export class ReviewModel {

    private _id: number;
    get id(): number {
      return this._id;
    }

    private _title: string;
    get title(): string {
      return this._title;
    }

    private _body: string;
    get body(): string {
      return this._body;
    }

    private _rating: RatingModel;
    get rating(): RatingModel {
      return this._rating;
    }

    private _imageUrl: string;
    get imageUrl(): string {
      return this._imageUrl;
    }

    constructor (id: number, title: string, body: string, rating: RatingModel, imageUrl: string) {
        this._id = id;
        this._title = title;
        this._body = body;
        this._rating = rating;
        this._imageUrl = imageUrl;
    }

}
