"use strict";
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} 이/가 멈췄습니다.`);
    }
}
let animal = new Animal("동물");
class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} 이/가 숨었습니다!`);
    }
    run(speed) {
        super.run(speed * 2);
    }
}
let rabbit = new Rabbit("흰 토끼");
rabbit.run(5); // 흰 토끼 은/는 속도 5로 달립니다.
rabbit.hide(); // 흰 토끼 이/가 숨었습니다!
class Tiger extends Animal {
    run(speed) {
        setTimeout(() => super.run(speed * 3), 1000); // 1초 후에 부모 stop을 호출합니다.
    }
}
let tiger = new Tiger("이랑호");
tiger.run(5);
class Cat extends Animal {
    constructor(name, earLength) {
        super(name);
        this.speed = 10;
        this.earLength = earLength;
    }
}
class Plant {
    constructor() {
        this.name = "plant";
        console.log(this.name);
    }
}
class Rose extends Plant {
    constructor() {
        super(...arguments);
        this.name = "rose";
    }
}
new Plant();
new Rose();
let bag = {
    name: "가방",
    identify() {
        console.log(`${this.name} 이 있습니다.`);
    },
};
let crossBag = {
    name: "크로스백",
    __proto__: bag,
    identify() {
        // call을 사용해 컨텍스트를 옮겨가며 부모(animal) 메서드를 호출합니다.
        super.identify.call(this); // (*)
    },
};
let longCrossBag = {
    name: "줄이긴 크로스백",
    __proto__: crossBag,
    identify() {
        // longEar를 가지고 무언가를 하면서 부모(rabbit) 메서드를 호출합니다.
        super.identify.call(this); // (**)
    },
};
longCrossBag.identify();
