import React from 'react';
import { useSelector } from 'react-redux';
import { USD, USD_SYMBOL, EUR_SYMBOL } from '../../utils/consts';
import { getConversionPrice } from '../../utils/helpers';

import {
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from './ProductShowcase.elements';
import ProductRates from '../ProductRates/ProductRates';

const ProductShowcase = ({ title, price, image, rate }) => {
  const currency = useSelector(store => store.global.currency);
  
  const currencySymbol = currency === USD
  ? USD_SYMBOL
  : EUR_SYMBOL;
  
  const productPrice = getConversionPrice(currency, price);

  return (
    <>
      <Product>
        <ProductImage src={image} />
        <ProductTitle>{title}</ProductTitle>
        <ProductRates rate={rate} />
        <ProductPrice>{productPrice}{currencySymbol}</ProductPrice>
      </Product>
    </>
  );
};

export default ProductShowcase;
