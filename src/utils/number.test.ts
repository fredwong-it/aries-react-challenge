import { roundToNearestTen } from "@/utils/number";

describe("roundToNearestTen", () => {
  it("105 round to 110", () => {
    const avgStrikePrice = roundToNearestTen(102);

    expect(avgStrikePrice).toEqual(100);
  });

  it("104 round to 100", () => {
    const avgStrikePrice = roundToNearestTen(102);

    expect(avgStrikePrice).toEqual(100);
  });

  it("95 round to 100", () => {
    const avgStrikePrice = roundToNearestTen(96);

    expect(avgStrikePrice).toEqual(100);
  });

  it("94 round to 90", () => {
    const avgStrikePrice = roundToNearestTen(94);

    expect(avgStrikePrice).toEqual(90);
  });
});
