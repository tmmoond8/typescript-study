"use strict";
var Mixin;
(function (Mixin) {
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
        getDebugValue() {
            return `${this.id}, ${this.firstName}, ${this.lastName}`;
        }
    }
    const ScottishFold = withDebug(Cat);
    const scott = new ScottishFold(3, "leo", "lol");
    console.log(scott.debug());
})(Mixin || (Mixin = {}));
