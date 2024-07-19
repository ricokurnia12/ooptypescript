describe("superconstructor", () => {
  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
    department: string;
    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }
  }

  it("shoul be superconstructor", () => {
    const employee = new Employee("rico", "Manajer");
    console.info("shoul be superconstructor", employee);
  });
});
