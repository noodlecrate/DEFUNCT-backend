import { ReviewModel } from "../models/review-model";
import { UserRepository } from "./user-repository";
import { NoodleRepository } from "./noodle-repository";

export class ReviewRepository {

  private _userRepository = new UserRepository();
  private _noodleRepository = new NoodleRepository();

   getAll(): Array<ReviewModel> {
      let reviews: Array<ReviewModel> = [];
      reviews[1] = new ReviewModel(1, "Great noodles, top class.", "These really have to be among some of the best noodles I've ever tasted. Their noodliness was as noodly as it gets.", 100.00, 'https://i.ytimg.com/vi/XutaTTNihe0/hqdefault.jpg');
      reviews[2] = new ReviewModel(2, "Not a fan", "noodles were too spicy for my tongue", 0.00, 'http://i.dailymail.co.uk/i/pix/2014/09/03/article-2740204-1C5E561F00000578-366_634x626.jpg');
      reviews[3] = new ReviewModel(3, "They were alright, I suppose...", "They weren't the best, but they weren't the worst. Food's food, I guess.", 50.00, 'http://i798.photobucket.com/albums/yy262/expressionofmyemotions/tumblr_lrud0coRjU1qhsw0o.gif');

      let users = this._userRepository.getAll();
      let noodles = this._noodleRepository.getAll();

      reviews.forEach((review, index) => {

        (<any>review).noodle = noodles[index - 1];

         if (review.getId() % 2 === 0) {
            (<any>review).author = users[2];
         }
         else {
            (<any>review).author = users[1];
         }
      });

      return reviews;
   }
}
