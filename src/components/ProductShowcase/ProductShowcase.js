import React from 'react';
import { useSelector } from 'react-redux';
import { USD, USD_SYMBOL, EUR_SYMBOL } from '../../utils/consts';
import { getConversionPrice, getProductSlug } from '../../utils/helpers';
import { Link } from 'react-router-dom';

import {
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from './ProductShowcase.elements';
import ProductRates from '../ProductRates/ProductRates';

const ProductShowcase = ({ id, title, price, image, rate }) => {
  const currency = useSelector(store => store.global.currency);

  const currencySymbol = currency === USD ? USD_SYMBOL : EUR_SYMBOL;

  const productPrice = getConversionPrice(currency, price);

  const productSlug = getProductSlug(title);

  console.log(id);

  return (
    <>
      <Product>
        <Link to={{ pathname: `/${productSlug}`, search: id }}>
          <ProductImage src={image} />
        </Link>
        <ProductTitle to={{ pathname: `/${productSlug}`, search: id }}>
          {title}
        </ProductTitle>
        <ProductRates rate={rate} />
        <ProductPrice>
          {productPrice}
          {currencySymbol}
        </ProductPrice>
      </Product>
    </>
  );
};

export default ProductShowcase;
