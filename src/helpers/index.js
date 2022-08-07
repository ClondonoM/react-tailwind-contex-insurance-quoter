export function getYearDifference(year) {
  return new Date().getFullYear() - year;
}

export function brandFactor(brand) {
  let factor = 1;
  switch (brand) {
    case '1':
      factor = 1.3;
      break;
    case '2':
      factor = 1.15;
      break;
    case '3':
      factor = 1.05;
      break;
    default:
      break;
  }
  return factor;
}

export function planFactor(plan) {
  return plan === '1' ? 1.2 : 1.5;
}

export function moneyFormat(money) {
  return money.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}
