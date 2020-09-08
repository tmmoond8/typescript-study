"use strict";
var _a;
class Phone {
    static staticMethod() {
        console.log(this === Phone);
    }
    instanceMethod() {
        console.log("method 2");
    }
}
class Iphone {
    static staticMethod() {
        console.log("static method");
    }
    instanceMethod() {
        console.log("instance method");
    }
}
Iphone.staticMethod();
new Iphone().instanceMethod();
const Banana = (_a = class {
        static staticMethod() {
            console.log("static method");
        }
        instanceMethod() {
            console.log("instance method");
        }
    },
    _a.staticField = "static field",
    _a);
Banana.staticMethod();
console.log(Banana.staticField);
new Banana().instanceMethod();
class Light {
    static staticMethod() { }
}
const LEDLight = class {
    static staticMethod() {
        console.log("static method");
    }
    on() {
        console.log("on");
    }
};
