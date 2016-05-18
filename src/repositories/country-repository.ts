import { CountryModel } from "../models/country-model";

export class CountryRepository {
  getAll(): Array<CountryModel> {
    return [
        new CountryModel(
                1,
                'Japan')
        ,
        new CountryModel(
                2,
                'China')
        ,
        new CountryModel(
                3,
                'Thailand')
    ]
  }
}
