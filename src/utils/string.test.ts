import { capitalizeFirstLetter } from "./string";

describe("capitalizeFirstLetter", () => {
  it("capitalize first letter successfully", () => {
    const result = capitalizeFirstLetter("testing");

    expect(result).toEqual("Testing");
  });
});
