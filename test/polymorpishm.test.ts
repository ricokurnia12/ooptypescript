describe(`Pholimorpishm`, () => {
  class Employee {
    constructor(public name: string) {}
  }
  class Manager extends Employee {}
  class VicePresidents extends Manager {}

  function sayHello(employee: Employee): void {
    console.info(`Hello ${employee.name}`);
    if (employee instanceof VicePresidents) {
      const vp = employee as VicePresidents;
      console.info(`Hello VP ${vp.name}`);
    } else if (employee instanceof Manager) {
      console.info(`Hello manager ${employee.name}`);
    } else console.info(`Hello employe ${employee.name}`);
  }

  it("should poimorpishm", () => {
    let employe = new Employee("Rico");
    console.info(employe);

    employe = new Manager("Rico");
    console.info(employe);

    employe = new VicePresidents("Rico");
    console.info(employe);

    sayHello(new Employee("COCO")); // Output: Hello Rico
    sayHello(new Manager("Rico")); // Output: Hello Rico
    sayHello(new VicePresidents("BUDI")); // Output: Hello Rico
  });
});
