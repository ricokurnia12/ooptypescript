describe("overridings", () => {
  class Employes {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello(name: string): void {
      console.info(`hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employes {
    department: string;
    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }
    sayHello(name: string): void {
      console.info(
        `hello ${name}, my name is ${this.name} and my department is ${this.department}`
      );
    }
  }

  it("should be overridings", () => {
    const employee = new Employes("John Doe");
    employee.sayHello("rico");
    const manager = new Manager("John Doe", "Marketing");
    manager.sayHello("John Doe");
  });
});
