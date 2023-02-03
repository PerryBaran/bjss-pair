function calcLBTT(price) {
  const convertTax = (tax) => {
    return Math.floor(tax/100);
  };

  let tax = 0;

  if (price < 145000) {
    return convertTax(tax);
  }

  if (price >= 145000 && price < 250000) {
    tax += (price - 145000) * 2;
    return convertTax(tax);
  }

  tax += (250000 - 145000) * 2;

  if (price >= 250000 && price < 325000) {
    tax += (price - 250000) * 5;
    return convertTax(tax);
  }

  tax += (325000 - 250000) * 5;

  if (price >= 325000 && price < 750000) {
    tax += (price - 325000) * 10;
    return convertTax(tax);
  }

  tax += (750000 - 325000) * 10;
  tax += (price - 750000) * 12;
  return convertTax(tax);
};

module.exports = calcLBTT;