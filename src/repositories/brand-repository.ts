import { BrandModel } from "../models/brand-model";

export class BrandRepository {
  getAll(): Array<BrandModel> {
    return [
        new BrandModel(
                1,
                'Mama')
        ,
        new BrandModel(
                2,
                'Pot Noodle')
        ,
        new BrandModel(
                3,
                'Soba')
    ]
  }
}
