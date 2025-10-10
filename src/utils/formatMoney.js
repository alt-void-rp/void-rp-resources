/**
 * Форматирует сумму денег с разделителем тысяч
 * @param {number} amount
 * @param {string} [currency='']
 * @param {string} [thousandSeparator=' ']
 * @returns {string}
 */
export function formatMoney(amount, currency = '', thousandSeparator = ' ') {
  if (typeof amount !== 'number') {
    return `0${currency ? ` ${currency}` : ''}`;
  }

  const integerPart = Math.round(amount);
  const formatted = integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
  return currency ? `${formatted} ${currency}` : formatted;
}
