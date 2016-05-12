export class ReviewModel {

    private title: string;
    private body: string;
    private score: number;

    constructor (title: string, body: string, score: number) {
        this.title = title;
        this.body = body;
        this.score = score;
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
