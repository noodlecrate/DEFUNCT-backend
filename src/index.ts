/// <reference path="../typings/main.d.ts" />

import * as express from 'express';
import { ReviewSerializer } from "./serializers/review-serializer";
import { ReviewModel } from "./models/review-model";

let app = express();
let reviewSerializer = new ReviewSerializer(); // get some nice IoC here

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:69');

    next();
});

let reviews: Array<ReviewModel> = [];
reviews[1] = new ReviewModel(1, "Great noodles, top class.", "These really have to be among some of the best noodles I've ever tasted. Their noodliness was as noodly as it gets.", 100.00, 'https://i.ytimg.com/vi/XutaTTNihe0/hqdefault.jpg');
reviews[2] = new ReviewModel(2, "Not a fan", "noodles were too spicy for my tongue", 0.00, 'http://i.dailymail.co.uk/i/pix/2014/09/03/article-2740204-1C5E561F00000578-366_634x626.jpg');
reviews[3] = new ReviewModel(3, "They were alright, I suppose...", "They weren't the best, but they weren't the worst. Food's food, I guess.", 50.00, 'http://i798.photobucket.com/albums/yy262/expressionofmyemotions/tumblr_lrud0coRjU1qhsw0o.gif');

app.get('/reviews/', (req, res) => {
    let serialized: Array<any> = [];

    reviews.forEach(r => serialized.push(reviewSerializer.serialize(r)));

    res.send(serialized);
});

app.get('/reviews/:id', (req, res) => {
    let id = parseInt(req.params['id']);
    let review = reviews[id];

    if (review === undefined) {
        res.status(404).json({
            error: {
                message: `Resource not found for id '${id}'`
            }
        });
        return;
    }

    res.send(reviewSerializer.serialize(review));
});

app.get('/noodles/', (req, res) => {
    res.send([
        {
            id: 0,
            name: 'Prawn Chilli Noodle',
            description: 'spicy yum yum',
            image: {
                thumb: 'http://i.imgur.com/RD2djUw.jpg?1'
            }
        },
        {
            id: 1,
            name: 'Shredded Chicken Noodle',
            description: 'Nicer than fried chicken',
            image: {
                thumb: 'http://i.imgur.com/WuJVusY.jpg?1'
            }
        }
    ]);
});

app.listen(3000);
