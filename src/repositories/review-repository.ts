import { ReviewModel } from "../models/review-model";
import { RatingModel } from "../models/rating-model";
import { UserRepository } from "./user-repository";
import { NoodleRepository } from "./noodle-repository";

export class ReviewRepository {

  private _userRepository = new UserRepository();
  private _noodleRepository = new NoodleRepository();

  private _reviews: Array<ReviewModel> = [];

  constructor () {
      let users = this._userRepository.getAll();
      let noodles = this._noodleRepository.getAll();

      this._reviews[1] = new ReviewModel(
          1,
          noodles[0],
          users[2],
          "Great noodles, top class.",
          "These really have to be among some of the best noodles I've ever tasted. Their noodliness was as noodly as it gets.",
          new RatingModel(5, 4, 3, 2, 1),
          'https://i.ytimg.com/vi/XutaTTNihe0/hqdefault.jpg'
      );
      this._reviews[2] = new ReviewModel(
          2,
          noodles[1],
          users[1],
          "Not a fan",
          "noodles were too spicy for my tongue",
          new RatingModel(2, 0, 2, 0, 2),
          'http://i.dailymail.co.uk/i/pix/2014/09/03/article-2740204-1C5E561F00000578-366_634x626.jpg'
      );
      this._reviews[3] = new ReviewModel(
          3,
          noodles[2],
          users[2],
          "They were alright, I suppose...",
          "They weren't the best, but they weren't the worst. Food's food, I guess.",
          new RatingModel(1, 2, 3, 4, 5),
          'http://i798.photobucket.com/albums/yy262/expressionofmyemotions/tumblr_lrud0coRjU1qhsw0o.gif'
      );
  }

  getAll(): Array<ReviewModel> {
      return this._reviews;
   }

   public insert(review: ReviewModel) {
     this._reviews[this._reviews.length + 1] = review;
   }
}
