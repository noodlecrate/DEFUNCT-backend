import { ISerializer } from "./serializer.i";
import { UserModel } from "../models/user-model";

export class UserSerializer
    implements ISerializer<UserModel>
{

    public serialize(model: UserModel): any {
        return {

        };
    }

    public deserialize(json: any): UserModel {
        return undefined;
    }

}
