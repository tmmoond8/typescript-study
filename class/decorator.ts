namespace Decorator {
  type ClassConstructor<T> = new (...args: any[]) => T;
  interface Serializable {
    serialize(): string;
  }
  function serializable<
    T extends ClassConstructor<{
      getValue(): string;
    }>
  >(Constructor: T) {
    return class extends Constructor implements Serializable {
      serialize() {
        return this.getValue();
      }
    };
  }

  @serializable
  class User {
    constructor(private name: string, private age: number) {}
    getValue() {
      return `${this.name}, ${this.age}`;
    }
  }
  const guest = new User("guest", 10);
  console.log((guest as any).serialize());
}
