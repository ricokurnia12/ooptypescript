describe("visibility", () => {
  class Counter {
    private counter: number = 0;
    protected Pcounter: number = 0;
    increment(): void {
      this.counter++;
    }
    getCounter(): string {
      return `my number is ${this.Pcounter}`;
    }
  }
  class DoubleCounter extends Counter {
    increment(): void {
      this.Pcounter += 2;
    }
  }

  it("should be private", () => {
    const counter = new Counter();

    counter.increment();
  });
  it("should be protected", () => {
    const doubleCounter = new DoubleCounter();

    doubleCounter.increment();
    doubleCounter.increment();
    console.info(doubleCounter.getCounter());
  });
});
