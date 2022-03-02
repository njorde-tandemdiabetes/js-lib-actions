import { greetMe, sayMyName } from "./index";

describe("sayMyName", () => {
  it("should say my correct name", () => {
    expect(sayMyName("bob")).toBe("Your name is bob");
  });
});

describe("greetMe", () => {
  it("should greet me by the correct name", () => {
    expect(greetMe("jane")).toBe("Hello jane");
  });
});
