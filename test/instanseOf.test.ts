describe("intstance", () => {
  it("should", () => {
    class Employee {}
    class Manager {}
    const budi = new Employee();
    const rico = new Manager();

    expect(budi instanceof Employee).toBe(true);
    expect(rico instanceof Manager).toBe(true);

    expect(budi instanceof Manager).toBe(false);
    expect(rico instanceof Employee).toBe(false);
  });
});
