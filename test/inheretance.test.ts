describe("Inheritance", () => {
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}

  class Director extends Employee {}

  it("should have getter and setter", () => {
    const employe = new Employee("Rico");
    console.info(employe.name);

    const manager = new Manager("Hilman");
    console.info(manager.name);
    const director = new Director("Sugih");
    console.info(director.name);
  });
});
