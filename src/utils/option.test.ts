import { mockOptions } from "@/utils/mockData";
import { generateData, optionColorMap } from "@/utils//option";

describe("generateData", () => {
  it("minMax default", () => {
    const { data, maxY, minY } = generateData(mockOptions, 70, 130);

    expect(data.length).toEqual(7);
    expect(data[0].price).toEqual(70);
    expect(data[0].totalProfit).toEqual(-28.04);
    expect(data[6].price).toEqual(130);
    expect(maxY).toEqual(30);
    expect(minY).toEqual(-30);
  });

  it("minMax 20", () => {
    const { data, maxY, minY } = generateData(mockOptions, 60, 140);

    expect(data.length).toEqual(9);
    expect(data[0].price).toEqual(60);
    expect(data[8].price).toEqual(140);
    expect(maxY).toEqual(50);
    expect(minY).toEqual(-50);
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
