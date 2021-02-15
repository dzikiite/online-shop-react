import React from 'react';
import { RatesStar } from '../components/ProductRates/ProductRates.elements';
import { USD, USD_TO_EUR } from '../utils/consts';

export const getStars = rate => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rate) stars.push(<RatesStar key={i} isYellow />);
    else stars.push(<RatesStar key={i} />);
  }
  return stars;
};

export const getConversionPrice = (actualCurrency, price) => {
  if (actualCurrency === USD) {
    return price;
  } else {
    return Math.floor(price * USD_TO_EUR);
  }
};

export const getProductSlug = title => {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};
