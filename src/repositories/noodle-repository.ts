import { NoodleModel } from "../models/noodle-model";

export class NoodleRepository {
  getAll(): Array<NoodleModel> {
    return [
        new NoodleModel(
                1,
                'Prawn Chilli Noodle',
                'spicy yum yum',
                'http://i.imgur.com/RD2djUw.jpg?1')
        ,
        new NoodleModel(
                2,
                'Shredded Chicken Noodle',
                'Nicer than fried chicken',
                'http://i.imgur.com/WuJVusY.jpg?1')
        ,
        new NoodleModel(
                3,
                'Imaginary Noodle',
                'who knows...',
                '')
    ]
  }
}
