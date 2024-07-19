describe("class", () => {
  class Customer {
    readonly id: number;
    name: string;
    age?: number;
    constructor(id: number, name: string, age?: number) {
      this.id = id;
      this.name = name;
      this.age = age;
      console.info("create new customer");
    }
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should can create constructor", () => {
    const customer = new Customer(1, "rico", 17);

    console.info(customer);

    customer.sayHello("John");
  });
});
