export class ReviewModel {

    private id: number;
    private username: string;
    private firstName: string;
    private lastName: string;

    constructor(id: number, username: string, firstName: string, lastName: string) {

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
