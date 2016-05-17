import { ISerializer } from "./serializer.i";
import { UserModel } from "../models/user-model";

export class UserSerializer
    implements ISerializer<UserModel>
{

    public serialize(model: UserModel): any {
        return {
            id: model.getId(),
            username: model.getUsername(),
            firstName: model.getFirstName(),
            lastName: model.getLastName()
        };
    }

    public deserialize(json: any): UserModel {
        return undefined;
    }

}
