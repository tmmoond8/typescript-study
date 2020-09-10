"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var PrivateProtected;
(function (PrivateProtected) {
    var _privateValue;
    class CoffeeMachine {
        constructor() {
            this._waterAmount = 0;
            _privateValue.set(this, 10);
        }
        setWaterAmount(value) {
            if (value < 0)
                throw new Error("물의 양은 음수가 될 수 없습니다.");
            this._waterAmount = value;
            __classPrivateFieldSet(this, _privateValue, value * 10);
        }
        getWaterAmount() {
            return this._waterAmount;
        }
        getPrivateValue() {
            return __classPrivateFieldGet(this, _privateValue);
        }
    }
    _privateValue = new WeakMap();
    new CoffeeMachine().setWaterAmount(100);
})(PrivateProtected || (PrivateProtected = {}));
