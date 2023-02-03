const calcLBTT = require("../calcLBTT");

describe("calcLBTT", () => {
  describe("buyer has: 1 house, personal use, owns no other properties, sell house when they buy new one", () => {
    test("price < 145k", () => {
      expect(calcLBTT(10000)).toEqual(0);
    });

    test("price = 145k", () => {
      expect(calcLBTT(145000)).toEqual(0);
    });

    test("145k < price < 250k", () => {
      expect(calcLBTT(234234)).toEqual(1784);
    });

    test("price = 250k", () => {
      expect(calcLBTT(250000)).toEqual(2100);
    });

    test("250k < price < 325k", () => {
      expect(calcLBTT(301301)).toEqual(4665);
    });

    test("price = 325k", () => {
      expect(calcLBTT(325000)).toEqual(5850);
    });

    test("325k < price < 750k", () => {
      expect(calcLBTT(574899)).toEqual(30839);
    });

    test("price = 750k", () => {
      expect(calcLBTT(750000)).toEqual(48350);
    });

    test("price > 750k", () => {
      expect(calcLBTT(10123123)).toEqual(1173124);
    });
  });
});