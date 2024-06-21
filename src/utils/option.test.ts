import { mockOptions } from "@/utils/mockData";
import { generateData, optionColorMap } from "@/utils//option";

describe("generateData", () => {
  it("minMax default", () => {
    const data = generateData(mockOptions);

    expect(data.length).toEqual(7);
    expect(data[0].price).toEqual(70);
    expect(data[0].totalProfit).toEqual(-28.04);
    expect(data[6].price).toEqual(130);
  });

  it("minMax 20", () => {
    const data = generateData(mockOptions, 20);

    expect(data.length).toEqual(5);
    expect(data[0].price).toEqual(80);
    expect(data[4].price).toEqual(120);
  });
});

describe("optionColorMap", () => {
  it("long call", () => {
    const color = optionColorMap("long", "Call");

    expect(color).toEqual("#00bfff");
  });

  it("short call", () => {
    const color = optionColorMap("short", "Call");

    expect(color).toEqual("#dc143c");
  });

  it("long put", () => {
    const color = optionColorMap("long", "Put");

    expect(color).toEqual("#008080");
  });

  it("short put", () => {
    const color = optionColorMap("short", "Put");

    expect(color).toEqual("#daa520");
  });
});
