function calcLBTT(price) {
  const convertTax = (tax) => {
    return Math.floor(tax/100);
  };

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

  let tax = 0;

  const lastIndex = taxBands.length - 1;
  for (let i = 0; i < lastIndex ; i++) {
    const { lowerLimit, rate } = taxBands[i];
    const upperLimit = taxBands[i + 1].lowerLimit;
  
    if (price < upperLimit) {
      tax += (price - lowerLimit) * rate;
      return convertTax(tax);
    }
    
    tax += (upperLimit - lowerLimit) * rate;
  }

  const { lowerLimit, rate } = taxBands[lastIndex];
  tax += (price - lowerLimit) * rate;
  return convertTax(tax);
};

module.exports = calcLBTT;