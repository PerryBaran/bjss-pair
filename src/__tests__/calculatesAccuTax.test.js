const { calculatesAccuTax } = require('../calcLBTT');

describe("calcualteAccuTax", () => {
  test("works as expected", () => {
    const price = 1000;
    const lowerLimit = 500;
    const rate = 5;
    const tax = 100;

    const actual = calculatesAccuTax(price, lowerLimit, rate, tax);
    expect(actual).toEqual(2600);
  });
});