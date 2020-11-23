const { reverse, reverse2, reverse3, reverse4 } = require("./index.js");
describe("Reverse String", () => {
  test("Apple => elppA", () => {
    expect(reverse("Apple")).toBe("elppA");
  });

  test("hello => olleh", () => {
    expect(reverse("hello")).toBe("olleh");
  });

  test("Greetings! => !sgniteerG", () => {
    expect(reverse("Greetings!")).toBe("!sgniteerG");
  });
});

describe("Reverse2", () => {
  test("Apple => elppA", () => {
    expect(reverse2("Apple")).toBe("elppA");
  });

  test("hello => olleh", () => {
    expect(reverse2("hello")).toBe("olleh");
  });

  test("Greetings! => !sgniteerG", () => {
    expect(reverse("Greetings!")).toBe("!sgniteerG");
  });
});

describe("Reverse3", () => {
  test("Apple => elppA", () => {
    expect(reverse3("Apple")).toBe("elppA");
  });

  test("hello => olleh", () => {
    expect(reverse3("hello")).toBe("olleh");
  });

  test("Greetings! => !sgniteerG", () => {
    expect(reverse3("Greetings!")).toBe("!sgniteerG");
  });
});

describe("Reverse4", () => {
  test("Apple => elppA", () => {
    expect(reverse4("Apple")).toBe("elppA");
  });

  test("hello => olleh", () => {
    expect(reverse4("hello")).toBe("olleh");
  });

  test("Greetings! => !sgniteerG", () => {
    expect(reverse4("Greetings!")).toBe("!sgniteerG");
  });
});
