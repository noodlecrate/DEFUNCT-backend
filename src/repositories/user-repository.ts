import { UserModel } from "../models/user-model";

export class UserRepository {
   getAll(): Array<UserModel> {
      let users: Array<UserModel> = [];
      users[1] = new UserModel(1, "jameskmonger", "James", "Monger");
      users[2] = new UserModel(2, "james.richford", "James", "Richford");

      return users;
   }
}
