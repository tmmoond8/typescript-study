"use strict";
var Static;
(function (Static) {
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
    let Static1;
    (function (Static1) {
        var _a;
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
    })(Static1 || (Static1 = {}));
    let Static2;
    (function (Static2) {
        var _a;
        class StaticInterface {
        }
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
        new Banana().instanceMethod;
    })(Static2 || (Static2 = {}));
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
})(Static || (Static = {}));
