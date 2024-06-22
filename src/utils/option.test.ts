import { mockOptions } from "@/utils/mockData";
import {
  generateData,
  getAvgStrikePrice,
  optionColorMap,
} from "@/utils//option";

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

describe("getAvgStrikePrice", () => {
  it("test 1", () => {
    const avgStrikePrice = getAvgStrikePrice(mockOptions);

    expect(avgStrikePrice).toEqual(102.625);
  });

  it("test 2", () => {
    const avgStrikePrice = getAvgStrikePrice(mockOptions.slice(3));

    expect(avgStrikePrice).toEqual(105);
  });

  it("test 3", () => {
    const avgStrikePrice = getAvgStrikePrice(mockOptions.slice(1));

    expect(avgStrikePrice).toEqual(103.5);
  });
});
