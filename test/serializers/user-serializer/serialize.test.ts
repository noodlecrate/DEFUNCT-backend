/// <reference path="../../../typings/main.d.ts" />

import { UserSerializer } from '../../../src/serializers/user-serializer';
import { UserModel } from "../../../src/models/user-model";

const test = require('modunit');

test('id is serialized correctly', (t, inputId) => {

    let serializer = new UserSerializer();
    let model = new UserModel(inputId, 'joe.bloggs', 'Joe', 'Bloggs');
    let json = serializer.serialize(model);

    t.assert.equal(inputId, json.id);

}, [
    [ 5 ],
    [ 20 ],
    [ 256 ]
]);
