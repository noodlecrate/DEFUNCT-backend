export class ReviewModel {

    private id: number;
    private title: string;
    private body: string;
    private score: number;
    private imageUrl: string;

    constructor (id: number, title: string, body: string, score: number, imageUrl: string) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.score = score;
        this.imageUrl = imageUrl;
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

    public getImageUrl(): string {
        return this.imageUrl;
    }

}
