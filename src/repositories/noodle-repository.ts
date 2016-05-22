import { NoodleModel } from "../models/noodle-model";
import { CountryRepository } from "./country-repository";
import { BrandRepository } from "./brand-repository";

export class NoodleRepository {

  private _countryRepository = new CountryRepository();
  private _brandRepository = new BrandRepository();

  private _noodles: Array<NoodleModel>;

  constructor() {
      let countries = this._countryRepository.getAll();
      let brands = this._brandRepository.getAll();

      this._noodles = [
          new NoodleModel(
              1,
              'Prawn Chilli Noodle',
              'spicy yum yum',
              'http://i.imgur.com/RD2djUw.jpg?1',
              countries[0],
              brands[0]
          ),
          new NoodleModel(
              2,
              'Shredded Chicken Noodle',
              'Nicer than fried chicken',
              'http://i.imgur.com/WuJVusY.jpg?1',
              countries[1],
              brands[1]
          ),
          new NoodleModel(
              3,
              'Imaginary Noodle',
              'who knows...',
              '',
              countries[2],
              brands[2]
          )
      ];
  }

  getAll(): Array<NoodleModel> {
      return this._noodles;
  }

  public insert(noodle: NoodleModel) {
    this._noodles[this._noodles.length + 1] = noodle;
  }
}
