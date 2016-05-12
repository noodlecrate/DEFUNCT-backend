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
reviews.push(new ReviewModel("Great noodles, top class.", "These really have to be among some of the best noodles I've ever tasted. Their noodliness was as noodly as it gets.", 100.00));
reviews.push(new ReviewModel("Not a fan", "noodles were too spicy for my tongue", 0.00));
reviews.push(new ReviewModel("They were alright, I suppose...", "They weren't the best, but they weren't the worst. Food's food, I guess.", 50.00));

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
