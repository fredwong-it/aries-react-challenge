import { OptionType } from "@/types/option";

const calculateLongCallProfit = (price: number, strike: number, premium: number) => {
  return Math.max(price - strike, 0) - premium
}
const calculateShortPutProfit = (price: number, strike: number, premium: number) => {
  return premium - Math.max(strike - price, 0);
}

const calculateShortCallProfit = (price: number, strike: number, premium: number) => {
  return premium - Math.max(price - strike, 0);
};

const calculateLongPutProfit = (price: number, strike: number, premium: number) => {
  return Math.max(strike - price, 0) - premium;
};

export const generateData = (options: OptionType[], minMaxX = 30) => {
  const sum = options.reduce((sum, option) => sum + option.strike_price, 0);
  const average = Math.round((sum / options.length) / 10) * 10;
  const startPrice = average - minMaxX;
  const endPrice = average + minMaxX;

  const data = []

  for (let price = startPrice; price <= endPrice; price += 10) {
    let totalProfit = 0
    let optionsProfitMap = {}

    for (const { strike_price, type, bid, ask, long_short } of options) {
      const key = `${long_short}_${type}_${strike_price}`
      let optionProfit

      if (type === 'Call' && long_short === "long") {
        optionProfit = calculateLongCallProfit(price, strike_price, ask);
      } else if (type === 'Call' && long_short === "short") {
        optionProfit = calculateShortCallProfit(price, strike_price, bid);
      } else if (type === 'Put' && long_short === "long") {
        optionProfit = calculateLongPutProfit(price, strike_price, ask);
      } else {
        optionProfit = calculateShortPutProfit(price, strike_price, bid);
      }

      optionsProfitMap = {
        ...optionsProfitMap,
        [key]: optionProfit
      }
      totalProfit += optionProfit;
    }



    data.push({ price, ...optionsProfitMap, totalProfit })
  }


  console.log({ data })
  return data;
};



export const optionColorMap = (long_short: string, type: string) => {
  let color;

  if (type === 'Call' && long_short === "long") {
    color = "#00bfff";
  } else if (type === 'Call' && long_short === "short") {
    color = "#dc143c";
  } else if (type === 'Put' && long_short === "long") {
    color = "#008080";
  } else {
    color = "#daa520";
  }

  return color;
}