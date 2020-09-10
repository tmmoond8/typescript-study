"use strict";
function withDebug(Class) {
    return class extends Class {
        debug() {
            const name = this.constructor.name;
            const value = this.getDebugValue();
            return `${name}: ${value}`;
        }
    };
}
class Cat {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
console.log(Object.entries(this).reduce((accum, [key, value]) => {
    accum += `${key}: ${value}`;
    return accum;
}, ""));
