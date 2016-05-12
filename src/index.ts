/// <reference path="../typings/main.d.ts" />

import * as express from 'express';
import { ReviewSerializer } from "./serializers/review-serializer";

let app = express();
let reviewSerializer = new ReviewSerializer(); // get some nice IoC here

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:69');

    next();
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
