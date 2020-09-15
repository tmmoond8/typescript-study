"use strict";
var Inteface_vs_Type;
(function (Inteface_vs_Type) {
    let Type;
    (function (Type) {
        const b = {
            good(x) {
                return x.toString();
            },
            bad(x) {
                return x;
            },
        };
    })(Type || (Type = {}));
    const mask = {
        color: "White",
        size: 12,
    };
    const createElement = (tag) => {
        if (tag === "a")
            return new HTMLAnchorElement();
        if (tag === "table")
            return new HTMLTableCaptionElement();
        return new HTMLElement();
    };
    const numberChange = (input) => {
        if (typeof input === "string")
            return {};
        else
            return input.toString();
    };
    let suits = ["hearts", "spades", "clubs", "diamonds"];
    function pickCard(x) {
        // Check to see if we're working with an object/array
        // if so, they gave us the deck and we'll pick the card
        if (typeof x == "object") {
            let pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        // Otherwise just let them pick the card
        else if (typeof x == "number") {
            let pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }
    const callback = function callback(message, line) {
        console.log(message + "call");
        callback.isfulfilled = true;
    };
    callback.isfulfilled = false;
    callback("foo");
    console.dir(callback);
})(Inteface_vs_Type || (Inteface_vs_Type = {}));
var Intersection_Union;
(function (Intersection_Union) {
    const tamm = {
        name: "tamm",
        lastModified: new Date(),
        age: 20,
        items: [],
        id: 14,
    };
    const a = {
        name: "a",
        age: 22,
        id: 16,
    };
    const b = {
        lastModified: new Date(),
        items: [],
        id: 17,
    };
    const c = {
        name: "c",
        lastModified: new Date(),
        items: [],
        id: 18,
    };
    const d = {
        name: "d",
        age: 20,
        lastModified: new Date(),
        id: 19,
    };
    const e = {
        name: "e",
        age: 20,
        lastModified: new Date(),
        items: [],
        id: 22,
    };
    function LoadUserByIntersection(userInfo) {
        console.log(`id: ${userInfo.id}, age: ${userInfo.age}, name: ${userInfo.name}, items: ${userInfo.items}, lastModified: ${userInfo.lastModified}`);
    }
    function LoadUserByUnion(userInfo) {
        console
            .log();
    }
    LoadUserByIntersection(tamm);
})(Intersection_Union || (Intersection_Union = {}));
