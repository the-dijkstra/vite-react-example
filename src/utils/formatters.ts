export const formatMoney = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'usd'
}).format;
