/// <reference path="../typings/main.d.ts" />

import * as express from 'express';

let app = express();

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
