const sum = require('./sum');

describe('A Math module Test', () => {
    test('As a User I want to sum 2 numbers', () => {
        expect(sum(2, 5)).toEqual(7);
    });
});
