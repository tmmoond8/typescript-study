class Sample {
  constructor() {}
  method1() {}
  method2() {}
}

interface SampleInterface {
  method1: () => void;
  method2: () => void;
}

class SampleWithInterface implements SampleInterface {
  constructor() {}
  method1() {}
  method2() {}
}

class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

let user = new User("John");
user.sayHi();

interface DogInterface {
  _name: string;
  name: string;
}

class Dog implements DogInterface {
  _name: string = "";

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 4) {
      console.log("이름이 너무 짧습니다.");
      return;
    }
    this._name = value;
  }
}
