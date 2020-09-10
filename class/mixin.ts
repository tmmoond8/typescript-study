// 모든 생성자를 표현하는 생성자 타입
type ClassConstructor<T> = new (...args: any[]) => T;

function withDebug<
  C extends ClassConstructor<{
    getDebugValue(): string;
  }>
>(Class: C) {
  return class extends Class {
    debug() {
      const name = this.constructor.name;
      const value = this.getDebugValue();
      return `${name}: ${value}`;
    }
  };
}

class Cat {
  constructor(
    private id: number,
    private firstName: string,
    private lastName: string
  ) {}
}

console.log(
  Object.entries(this).reduce((accum, [key, value]) => {
    accum += `${key}: ${value}`;
    return accum;
  }, "")
);
