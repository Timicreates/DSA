const maxProfit = (prices) => {
  let minPrice = prices[0]; //    assume the first day is the cheapest to buy

  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = [i]; // get current prices
    // compare the first day we picked to be the lowest to other days to see which day is the lowest
    minPrice = Math.min(minPrice, currentPrice);
    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit;
};
