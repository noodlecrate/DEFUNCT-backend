import { NoodleModel } from "./noodle-model";
import { UserModel } from "./user-model";
import { RatingModel } from "./rating-model";

export class ReviewModel {

    private _id: number;
    get id(): number {
      return this._id;
    }

    private _noodle: NoodleModel;
    get noodle(): NoodleModel {
        return this._noodle;
    }

    private _author: UserModel;
    get author(): UserModel {
        return this._author;
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

    constructor (id: number, noodle: NoodleModel, author: UserModel, title: string, body: string, rating: RatingModel, imageUrl: string) {
        this._id = id;
        this._noodle = noodle;
        this._author = author;
        this._title = title;
        this._body = body;
        this._rating = rating;
        this._imageUrl = imageUrl;
    }

}
