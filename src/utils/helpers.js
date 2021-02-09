import React from 'react';
import { RatesStar } from '../components/ProductRates/ProductRates.elements';

export const getStars = rate => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rate) stars.push(<RatesStar key={i} isYellow />);
    else stars.push(<RatesStar key={i} />);
  }
  return stars;
};
