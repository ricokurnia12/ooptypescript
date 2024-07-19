describe("parameter properties", () => {
  class Person {
    constructor(public name: string, private age: number) {}
  }

  it("shouldbe suppoert", () => {
    const person = new Person("John Doe", 30);
    console.info("shouldbe suppoert", person);
  });
});
