"use strict";
const info = (val) => {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val + 10;
};
