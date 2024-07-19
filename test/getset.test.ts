describe("Getter setter", () => {
  class Category {
    _name?: string;

    get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return "empty";
      }
    }

    set name(value: string) {
      if (value !== "") {
        this._name = value;
      }
    }
  }

  it("should have getter and setter", () => {
    const category = new Category();
    console.info(category.name);

    category.name = "Foods";
    console.info(category.name);
  });
});
