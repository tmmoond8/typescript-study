class Phone {
  static staticMethod() {
    console.log(this === Phone);
  }

  instanceMethod() {
    console.log("method 2");
  }
}

type IT = typeof Phone;

interface InstanceInteface {
  instanceMethod: () => void;
}

class Iphone implements InstanceInteface {
  static staticMethod() {
    console.log("static method");
  }
  instanceMethod() {
    console.log("instance method");
  }
}

Iphone.staticMethod();
new Iphone().instanceMethod();

interface InstanceInteface {
  instanceMethod: () => void;
}

interface StaticInterface {
  new (): InstanceInteface;
  staticMethod: () => void;
  staticField: string;
}

const Banana: StaticInterface = class {
  static staticField: string = "static field";
  static staticMethod() {
    console.log("static method");
  }
  instanceMethod() {
    console.log("instance method");
  }
};

Banana.staticMethod();
console.log(Banana.staticField);
new Banana().instanceMethod();

interface LEDLightInterface {
  on: () => void;
}

abstract class Light {
  static staticMethod() {}
}

const LEDLight: typeof Light = class implements LEDLightInterface {
  static staticMethod() {
    console.log("static method");
  }
  on() {
    console.log("on");
  }
};
