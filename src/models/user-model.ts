import { IModel } from "./model.i";

export class UserModel implements IModel {

    private id: number;
    private username: string;
    private firstName: string;
    private lastName: string;

    constructor(id: number, username: string, firstName: string, lastName: string) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getId(): number {
        return this.id;
    }

    public getUsername(): string {
        return this.username;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

}
