import { NoodleModel } from "../models/noodle-model";
import { CountryRepository } from "./country-repository";

export class NoodleRepository {

  private _countryRepository = new CountryRepository();

  getAll(): Array<NoodleModel> {
    let noodles =  [
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
    ];

    let countries = this._countryRepository.getAll();

    noodles.forEach(noodle => {
      (<any>noodle).countryOfOrigin = countries[noodle.id - 1];
    })

    return noodles;
  }
}
