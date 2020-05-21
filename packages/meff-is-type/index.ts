const ARRAY_TYPE = "array";
const STRING_TYPE = "string";
const NUMBER_TYPE = "number";
const FUNCTION_TYPE = "function";
const UNDEFINED_TYPE = "undefined";
const BOOLEAN_TYPE = "boolean";
function isType(val: any, type?: any) {
    let typeString = "[object Object]";
    switch (type) {
        case ARRAY_TYPE:
            typeString = "[object Array]";
            break;
        case STRING_TYPE:
            typeString = "[object String]";
            break;
        case NUMBER_TYPE:
            typeString = "[object Number]";
            break;
        case FUNCTION_TYPE:
            typeString = "[object Function]";
            break;
        case UNDEFINED_TYPE:
            typeString = "[object Undefined]";
            break;
        case BOOLEAN_TYPE:
            typeString = "[object Boolean]";
            break;
        default:
            break;
    }
    return Object.prototype.toString.call(val) === typeString;
}
export function isArray(arr: any) {
    return isType(arr, ARRAY_TYPE);
}
export function isObject(object: any) {
    return isType(object);
}
export function isBoolean(bool: any) {
    return isType(bool, BOOLEAN_TYPE);
}
export function isFunction(func: any) {
    return isType(func, FUNCTION_TYPE);
}
export function isString(str: any) {
    return isType(str, STRING_TYPE);
}
export function isNumber(num: any) {
    return isType(num, STRING_TYPE);
}
export function isNaN(nan: any) {
    // eslint-disable-next-line no-self-compare
    return nan !== nan;
}
export function isEmpty(val: any) {
    return !val && val !== 0;
}
