import { LongShortType, OptionType, OptionTypeType } from "@/types/option";

const calculateLongCallProfit = (
  price: number,
  strike: number,
  premium: number
) => {
  return Math.max(price - strike, 0) - premium;
};
const calculateShortPutProfit = (
  price: number,
  strike: number,
  premium: number
) => {
  return premium - Math.max(strike - price, 0);
};

const calculateShortCallProfit = (
  price: number,
  strike: number,
  premium: number
) => {
  return premium - Math.max(price - strike, 0);
};

const calculateLongPutProfit = (
  price: number,
  strike: number,
  premium: number
) => {
  return Math.max(strike - price, 0) - premium;
};

type optionProfitMapType = {
  [key: string]: number;
};

export const getAvgStrikePrice = (options: OptionType[]) => {
  const sum = options.reduce((sum, option) => sum + option.strike_price, 0);
  const average = sum / options.length; //Math.round(sum / options.length / 10) * 10;

  return average;
};

export const generateData = (
  options: OptionType[],
  minX: number,
  maxX: number
) => {
  const data = [];
  let edgeProfitData: number[] = [];

  for (let price = minX; price <= maxX; price += 10) {
    let totalProfit = 0;
    let optionProfitMap: optionProfitMapType = {};

    for (const { strike_price, type, bid, ask, long_short } of options) {
      const key = `${long_short}_${type}_${strike_price}`;
      let optionProfit;

      if (type === "Call" && long_short === "long") {
        optionProfit = calculateLongCallProfit(price, strike_price, ask);
      } else if (type === "Call" && long_short === "short") {
        optionProfit = calculateShortCallProfit(price, strike_price, bid);
      } else if (type === "Put" && long_short === "long") {
        optionProfit = calculateLongPutProfit(price, strike_price, ask);
      } else {
        optionProfit = calculateShortPutProfit(price, strike_price, bid);
      }

      optionProfitMap = {
        ...optionProfitMap,
        [key]: optionProfit,
      };
      totalProfit += optionProfit;
    }

    if (price === minX || price === maxX) {
      edgeProfitData = [
        ...edgeProfitData,
        totalProfit,
        ...Object.values(optionProfitMap),
      ];
    }

    data.push({ price, ...optionProfitMap, totalProfit });
  }

  const minY = Math.min(...edgeProfitData);
  const maxY = Math.max(...edgeProfitData);
  const intervalY =
    Math.round(Math.max(Math.abs(minY), Math.abs(maxY)) / 10) * 10;

  return {
    data,
    minY: intervalY * -1,
    maxY: intervalY,
  };
};
