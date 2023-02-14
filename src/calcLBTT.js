function calcLBTT(price) {
  const taxBands = [
    {
      lowerLimit: 145000,
      rate: 2,
    },
    {
      lowerLimit: 250000,
      rate: 5,
    },
    {
      lowerLimit: 325000,
      rate: 10,
    },
    {
      lowerLimit: 750000,
      rate: 12,
    },
  ];
  
  if (price < taxBands[0].lowerLimit) return 0;

  let taxInPennies = 0;
  let currentPrice = price;
  for (let i = taxBands.length - 1; i >= 0; i--) {
    const { lowerLimit, rate } = taxBands[i];
    if (currentPrice >= lowerLimit) {
      taxInPennies += (currentPrice - lowerLimit) * rate;
      currentPrice = lowerLimit;
    }
  }

  return convertTaxPenniesToPounds(taxInPennies);
};

function calculatesAccuTax(upperLimit, lowerLimit, rate, tax) {
  return tax + ((upperLimit - lowerLimit) * rate);
};

function convertTaxPenniesToPounds(tax) {
  return Math.floor(tax/100);
};

module.exports = { calcLBTT, calculatesAccuTax};