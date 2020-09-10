"use strict";
var Basic;
(function (Basic) {
    class Sample {
        constructor() { }
        method1() { }
        method2() { }
    }
    class SampleWithInterface {
        constructor() { }
        method1() { }
        method2() { }
    }
    class User {
        constructor(name) {
            this.name = name;
        }
        sayHi() {
            console.log(this.name);
        }
    }
    let user = new User("John");
    user.sayHi();
    class Dog {
        constructor(name) {
            this._name = "";
            this._name = name;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            if (value.length < 4) {
                console.log("이름이 너무 짧습니다.");
                return;
            }
            this._name = value;
        }
    }
})(Basic || (Basic = {}));
