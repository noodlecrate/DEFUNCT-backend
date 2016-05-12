export class ReviewModel {

    private id: number;
    private title: string;
    private body: string;
    private score: number;

    constructor (id: number, title: string, body: string, score: number) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.score = score;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getBody(): string {
        return this.body;
    }

    public getScore(): number {
        return this.score;
    }

}
