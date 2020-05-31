const {
    isArray,
    isObject,
    isString,
    isNumber,
    isFunction,
    isBoolean,
    isPromise,
    isDate,
    isSymbol,
    isEmpty,
    isNaN,
} = require("../../packages/meff-is-type/lib");
const { expect } = require("chai");
const { describe, it } = require("mocha");

const typeCases = [
    { show: "{}", value: {} },
    { show: "[]", value: [] },
    { show: "() => {}", value: () => {} },
    { show: "''", value: "" },
    { show: "123", value: 123 },
    { show: "true", value: true },
    { show: "new Promise(() => {})", value: new Promise(() => {}) },
    { show: "new Date()", value: new Date() },
    { show: "Symbol('123')", value: Symbol("123") },
    
];

function execCase(func, rightIndex) {
    typeCases.forEach((caseItem, index) => {
        const { value, show } = caseItem;
        it(`${func.name}(${show}) should be ${String(
            rightIndex === index
        )}`, function () {
            if (rightIndex === index) {
                expect(func(value)).to.be.ok;
            } else {
                expect(func(value)).to.not.be.ok;
            }
        });
    });
}

describe("meff-is-type test", function () {
    describe("isObject()", function () {
        execCase(isObject, 0)
    });

    describe("isArray()", function () {
        execCase(isArray, 1)
    });

    describe("isFunction()", function () {
        execCase(isFunction, 2)
    });

    describe("isString()", function () {
        execCase(isString, 3)
    });

    describe("isNumber()", function () {
        execCase(isNumber, 4)
    });

    describe("isBoolean()", function () {
        execCase(isBoolean, 5)
    });

    describe("isPromise()", function () {
        execCase(isPromise, 6)
    });

    describe("isDate()", function () {
        execCase(isDate, 7)
    });

    describe("isSymbol()", function () {
        execCase(isSymbol, 8)
    });

    describe("isEmpty()", function () {
        it("isEmpty(null) should be true", function() {
            expect(isEmpty(null)).to.be.ok;
        })

        it("isEmpty('') should be true", function() {
            expect(isEmpty('')).to.be.ok;
        })

        it("isEmpty(undefined) should be true", function() {
            expect(isEmpty(undefined)).to.be.ok;
        })

        it("isEmpty(0) should be false", function() {
            expect(isEmpty(0)).to.not.be.ok;
        })
    });

    describe("isNaN()", function () {
        it("isNaN(NaN) should be true", function() {
            expect(isNaN(NaN)).to.be.ok;
        })

        it("isNaN(123) should be false", function() {
            expect(isNaN(123)).to.not.be.ok;
        })

        it("isNaN(undefined) should be false", function() {
            expect(isNaN(undefined)).to.not.be.ok;
        })
    });
});
