/*
 * @Author: wujingfei 00718
 * @Date: 2020-05-21 17:29:51
 * @Description: Description
 */ 

interface storageInstance {
    get(key: string): any,
    set(key: string, value: any): void,
    remove(key: string): void,
}

const get = (storageObject: any, key: string): any => {
    const data = storageObject.getItem(key);
    let result;
    try {
        result = typeof JSON.parse(data) === "object" ? JSON.parse(data) : data;
    } catch (error) {
        result = data;
    }
    return result;
};

const set = (storageObject: any, key: string, value: any): void => {
    if (typeof value === "object") {
        storageObject.setItem(key, JSON.stringify(value));
    } else {
        storageObject.setItem(key, value);
    }
};

const remove = (storageObject: any, key: string): void => {
    storageObject.removeItem(key);
};

const storage = (storageObject: any) => {
    const obj: storageInstance = {
        get: (key: string) => get(storageObject, key),
        set: (key: string, value: any): void => set(storageObject, key, value),
        remove: (key: string): void => remove(storageObject, key),
    };

    return obj;
};

function setCookie(name: string, value: string) {
    const Days = 30;
    const exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 30);
    document.cookie = `${name}=${escape(value)};expires=${exp.toUTCString()}`;
}

function getCookie(name: string) {
    if (!document.cookie) return;

    let arr;
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    if ((arr = document.cookie.match(reg))) {
        return unescape(decodeURI(arr[2]));
    } else {
        return "";
    }
}

function delCookie(name: string) {
    if (!document.cookie) return;
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = getCookie(name);
    document.cookie = `${name}=${cval};expires=${exp.toUTCString()}`;
}

export const cookie: storageInstance = {
    get: getCookie,
    set: setCookie,
    remove: delCookie,
};

export const local = storage(window.localStorage);
export const session = storage(window.sessionStorage);
