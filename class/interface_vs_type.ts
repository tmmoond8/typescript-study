type A = number;
type B = A | string;

interface Food {
  calories: number;
  tasty: boolean;
}

interface Sushi extends Food {
  salty: boolean;
}

interface Cake extends Food {
  sweet: boolean;
}

namespace Interface {
  interface A {
    good(x: number): string;
    bad(x: number): string;
  }

  // interface B extends A {
  //   good(x: number): string;
  //   bad(x: number): number;
  // }

  // const b: B = {
  //   good(x: number) {
  //     return x.toString();
  //   },
  // };
}

namespace Type {
  type A = {
    good(x: number): string;
    bad(x: number): string;
  };

  type B = A & {
    good(x: number): string;
    bad(x: number): number;
  };

  // const b: B = {
  //   good(x: number): string {
  //     return x.toString();
  //   },
  //   bad(x: number): string | number {
  //     return x % 2 === 0 ? x : x.toString();
  //   },
  // };
}

interface Mask {
  color: string;
}

interface Mask {
  size: number;
}

const mask: Mask = {
  color: "White",
  size: 12,
};

interface Notebook<Age extends number> {
  age: Age;
}

type CreateElement = {
  (tag: "a"): HTMLAnchorElement;
  (tag: "canvas"): HTMLCanvasElement;
  (tag: "table"): HTMLTableElement;
  (tag: string): HTMLElement;
};

const createElement: CreateElement = (tag: any): any => {
  if (tag === "a") return new HTMLAnchorElement();
  if (tag === "table") return new HTMLTableCaptionElement();
  return new HTMLElement();
};

type NumberChange = {
  (input: string): number;
  (input: number): string;
};

const numberChange: NumberChange = (input: any) => {
  if (typeof input === "string") return {};
  else return input.toString();
};

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: any): any {
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

type Callback = {
  (message: string): void;
  (message: string, line: number): void;
  isfulfilled: boolean;
};

const callback: Callback = function callback(message: string, line?: number) {
  console.log(message + "call");
  callback.isfulfilled = true;
};
callback.isfulfilled = false;

callback("foo");
console.dir(callback);
