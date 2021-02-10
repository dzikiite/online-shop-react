export const CHANGE_CURRENCY = 'changeCurrency';

export const changeCurrency = (currency) => ({
  type: CHANGE_CURRENCY,
  payload: currency,
})