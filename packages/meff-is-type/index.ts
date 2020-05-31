const ARRAY_TYPE = "array";
const STRING_TYPE = "string";
const NUMBER_TYPE = "number";
const FUNCTION_TYPE = "function";
const BOOLEAN_TYPE = "boolean";
const DATE_TYPE = "date";
const PROMISE_TYPE = "promise";
const SYMBOL_TYPE = "symbol";


type Types = 'object' | "array" | "string" | "number" | "function" | "boolean" | "date" | "symbol" | "promise"

function is(val: any, type: Types = "object") {
    const typeString = `[object ${type.charAt(0).toUpperCase() + type.slice(1)}]`;
    return Object.prototype.toString.call(val) === typeString;
}

export function isArray(arr: any) {
    return is(arr, ARRAY_TYPE);
}
export function isObject(object: any) {
    return is(object);
}
export function isBoolean(bool: any) {
    return is(bool, BOOLEAN_TYPE);
}
export function isFunction(func: any) {
    return is(func, FUNCTION_TYPE);
}
export function isString(str: any) {
    return is(str, STRING_TYPE);
}
export function isNumber(num: any) {
    return is(num, NUMBER_TYPE);
}
export function isDate(date: any) {
    return is(date, DATE_TYPE);
}
export function isSymbol(symbol: any) {
    return is(symbol, SYMBOL_TYPE);
}
export function isPromise(promise: any) {
    return is(promise, PROMISE_TYPE);
}
export function isNaN(nan: any) {
    return typeof nan === "number" && nan !== nan;
}
export function isEmpty(val: any) {
    return !val && val !== 0;
}
