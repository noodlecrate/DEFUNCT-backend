import { ReviewModel } from "../models/review-model";
import { RatingModel } from "../models/rating-model";
import { UserRepository } from "./user-repository";
import { NoodleRepository } from "./noodle-repository";

let reviews: Array<ReviewModel> = [];
reviews[1] = new ReviewModel(1, "Great noodles, top class.", "These really have to be among some of the best noodles I've ever tasted. Their noodliness was as noodly as it gets.", new RatingModel(5, 4, 3, 2, 1), 'https://i.ytimg.com/vi/XutaTTNihe0/hqdefault.jpg');
reviews[2] = new ReviewModel(2, "Not a fan", "noodles were too spicy for my tongue", new RatingModel(2, 0, 2, 0, 2), 'http://i.dailymail.co.uk/i/pix/2014/09/03/article-2740204-1C5E561F00000578-366_634x626.jpg');
reviews[3] = new ReviewModel(3, "They were alright, I suppose...", "They weren't the best, but they weren't the worst. Food's food, I guess.", new RatingModel(1, 2, 3, 4, 5), 'http://i798.photobucket.com/albums/yy262/expressionofmyemotions/tumblr_lrud0coRjU1qhsw0o.gif');

export class ReviewRepository {

  private _userRepository = new UserRepository();
  private _noodleRepository = new NoodleRepository();

   getAll(): Array<ReviewModel> {

      let users = this._userRepository.getAll();
      let noodles = this._noodleRepository.getAll();

      reviews.forEach((review, index) => {

        (<any>review).noodle = noodles[index - 1];

         if (review.id % 2 === 0) {
            (<any>review).author = users[2];
         }
         else {
            (<any>review).author = users[1];
         }
      });

      return reviews;
   }

   public insert(review: ReviewModel) {
     reviews[reviews.length + 1] = review;
   }
}
