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

export const generateData = () => {
  const data = []

  for (let price = 60; price <= 140; price += 10) {
    // Individual profits
    const optionsProfit1 = calculateLongCallProfit(price, 100, 12.04);
    const optionsProfit2 = calculateLongCallProfit(price, 102.50, 14);
    const optionsProfit3 = calculateShortPutProfit(price, 103, 14);
    const optionsProfit4 = calculateLongPutProfit(price, 105, 18); // Use put formula if separate

    // Total profit
    const totalProfit = optionsProfit1 + optionsProfit2 + optionsProfit3 + optionsProfit4;

    data.push({ price, optionsProfit1, optionsProfit2, optionsProfit3, optionsProfit4, totalProfit })
  }

  return data;
};