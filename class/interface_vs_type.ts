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
