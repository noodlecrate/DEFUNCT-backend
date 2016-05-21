/// <reference path="../../../typings/main.d.ts" />

import { ReviewSerializer } from '../../../src/serializers/review-serializer';
import { ReviewModel } from "../../../src/models/review-model";
import { RatingModel } from "../../../src/models/rating-model";

const test = require('modunit');

const DUMMY_RATING = new RatingModel(1, 100.00, 100.00, 100.00, 100.00);

test('id is serialized correctly', (t, inputId) => {

    let serializer = new ReviewSerializer();
    let model = new ReviewModel(inputId, 'test title', 'test body', DUMMY_RATING, '');
    let json = serializer.serialize(model);

    t.assert.equal(inputId, json.id);

}, [
    [ 5 ],
    [ 20 ],
    [ 256 ]
]);

test('title is serialized correctly', (t, inputTitle) => {

    let serializer = new ReviewSerializer();
    let model = new ReviewModel(1, inputTitle, 'test body', DUMMY_RATING, '');
    let json = serializer.serialize(model);

    t.assert.equal(inputTitle, json.title);

}, [
    [ 'some title' ],
    [ 'best noodles ever' ],
    [ 'another great review title' ]
]);

test('body is serialized correctly', (t, inputBody) => {

    let serializer = new ReviewSerializer();
    let model = new ReviewModel(1, 'test title', inputBody, DUMMY_RATING, '');
    let json = serializer.serialize(model);

    t.assert.equal(inputBody, json.body);

}, [
    [ 'lorem ipsum dolor sit amet' ],
    [ 'never gonna give you up, never gonna let you down' ],
    [ 'overpaid CEOs and communists cannot destroy our medical dramas' ]
]);

test('image url is serialized correctly', (t, inputImageUrl) => {

    let serializer = new ReviewSerializer();
    let model = new ReviewModel(1, 'test title', 'test body', DUMMY_RATING, inputImageUrl);
    let json = serializer.serialize(model);

    t.assert.equal(inputImageUrl, json.imageUrl);

}, [
    [ 'http://google.com/some-image.jpg' ],
    [ 'http://facebook.com/image001.png' ],
    [ 'http://imgur.com/IMAGE.gif' ]
]);
