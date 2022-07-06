const {
    bruteFindLowestCommonMultiple,
    findPrimeFactors,
    findLowestCommonMultiple,
} = require("../index");

describe("Duncan told me brute force should work", () => {
    it("brute force small data set", () => {
        const actual = bruteFindLowestCommonMultiple(3);
        expect(actual).toBe(6);
    });
    it("brute force larger data set", () => {
        const actual = bruteFindLowestCommonMultiple(10);
        expect(actual).toBe(2520);
    });
    it("should work with brute force for final answer", () => {
        const actual = bruteFindLowestCommonMultiple(20);
        expect(actual).toBe(232792560);
    });
});

describe("findPrimeFactors", () => {
    it("returns prime factors of 1 - endNumber", () => {
        const actual = findPrimeFactors(5);
        const expected = [5, 2, 2, 3, 2];
        expect(actual).toEqual(expected);
    });
    it("returns prime factors of 1 - endNumber, when given larger endnumber", () => {
        const actual = findPrimeFactors(10);
        const expected = [5, 2, 3, 3, 2, 2, 2, 7, 3, 2, 5, 2, 2, 3, 2];

        expect(actual).toEqual(expected);
    });
});

describe("findLowestCommonMultiple", () => {
    it("find lowest Common multiple for data set of 2 ", () => {
        const actual = findLowestCommonMultiple(3);
        const expected = 6;
        expect(actual).toBe(expected);
    });
    it("find lowest Common for larger data set ", () => {
        const actual = findLowestCommonMultiple(10);
        const expected = 2520;
        expect(actual).toBe(expected);
    });
    it("find lowest Common for the question asked ", () => {
        const actual = findLowestCommonMultiple(20);
        const expected = 232792560;
        expect(actual).toBe(expected);
    });
});
