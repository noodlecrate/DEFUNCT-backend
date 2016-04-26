/// <reference path="../typings/main.d.ts" />

import * as express from 'express';

let app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:69');

    next();
});

app.get('/noodles/', (req, res) => {
    res.send([
        {
            id: 0,
            name: 'Prawn Chilli Noodle',
            description: 'spicy yum yum'
        },
        {
            id: 1,
            name: 'Shredded Chicken Noodle',
            description: 'Nicer than fried chicken'
        }
    ]);
});

app.listen(3000);
