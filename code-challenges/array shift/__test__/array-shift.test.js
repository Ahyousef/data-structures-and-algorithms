const shift = require('../array-shift')

describe(`insertShiftArray`, () => {
    it(`Middle index should equal value `, () => {
        // even array
        expect(shift([1, 2, 3, 4], 5)).toEqual([1, 2, 5, 3, 4]);
        // odd array
        expect(shift([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 6, 4, 5]);
    });
});