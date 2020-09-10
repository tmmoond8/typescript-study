"use strict";
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
