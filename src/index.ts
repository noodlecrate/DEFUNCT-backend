/// <reference path="../typings/index.d.ts" />

import * as express from 'express';
import { ReviewSerializer } from "./serializers/review-serializer";
import { ReviewModel } from "./models/review-model";
import { UserSerializer } from "./serializers/user-serializer";
import { NoodleSerializer } from "./serializers/noodle-serializer";
import { UserModel } from "./models/user-model";
import { UserRepository } from "./repositories/user-repository";
import { ReviewRepository } from "./repositories/review-repository";
import { NoodleRepository } from "./repositories/noodle-repository";
import * as  bodyParser from "body-parser";

import * as passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

let app = express();
let reviewSerializer = new ReviewSerializer(); // get some nice IoC here
let userSerializer = new UserSerializer(); // get some nice IoC here
let noodleSerializer = new NoodleSerializer();
let userRepository = new UserRepository();
let reviewRepository = new ReviewRepository();
let noodleRepository = new NoodleRepository();

passport.use(new LocalStrategy(
    (username, password, done) => {
        let users = userRepository.getAll();

        let usernameFilter = users.filter(u => u.getUsername() === username);
        if (!usernameFilter || usernameFilter.length !== 1) {
            return done(null, false, { message: 'Incorrect username.' });
        }

        if (!password || password !== "correct") {
            return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, usernameFilter[0]);
    }
));

// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")

    next();
});

app.get('/reviews/', (req, res) => {
    let serialized: Array<any> = [];

    reviewRepository.getAll().forEach(r => serialized.push(reviewSerializer.serialize(r)));

    res.send(serialized);
});

app.get('/reviews/:id', (req, res) => {
    let id = parseInt(req.params['id']);
    let review = reviewRepository.getAll()[id];

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

app.get('/users/', (req, res) => {
    let serialized: Array<any> = [];

    userRepository.getAll().forEach(r => serialized.push(userSerializer.serialize(r)));

    res.send(serialized);
});

app.get('/users/:id', (req, res) => {
    let id = parseInt(req.params['id']);
    let user = userRepository.getAll()[id];

    if (user === undefined) {
        res.status(404).json({
            error: {
                message: `Resource not found for id '${id}'`
            }
        });
        return;
    }

    res.send(userSerializer.serialize(user));
});

app.get('/noodles/', (req, res) => {
    res.send(noodleRepository.getAll());
});

app.get('/noodles/:id', (req, res) => {
    let id = parseInt(req.params['id']);
    let noodle = noodleRepository.getAll()[id];

    if (noodle === undefined) {
        res.status(404).json({
            error: {
                message: `Resource not found for id '${id}'`
            }
        });
        return;
    }

    res.send(noodleSerializer.serialize(noodle));
});

app.post("/noodle", (req: express.Request, res: express.Response) => {
  noodleRepository.insert(req.body);

  res.sendStatus(201);
});

app.post("/review", (req: express.Request, res: express.Response) => {
  reviewRepository.insert(req.body);

  res.sendStatus(201);
});

app.post("/session",
    passport.authenticate('local'),
    (req: express.Request, res: express.Response) => {
        // if we reach this point, we authenticated correctly
        res.sendStatus(201);
    }
);

app.listen(3000);

console.log("noodlecrate-backend listening on 3000");
