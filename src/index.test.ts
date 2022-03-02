import { sayMyName } from "./index";

describe("sayMyName", () => {
  it("should say my correct name", () => {
    expect(sayMyName("bob")).toBe("Your name is bob");
  });
});
