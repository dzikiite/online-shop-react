import React from 'react';

import {
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from './ProductShowcase.elements';
import ProductRates from '../ProductRates/ProductRates';

const ProductShowcase = ({ title, price, image, rate }) => {
  return (
    <>
      <Product>
        <ProductImage src={image} />
        <ProductTitle>{title}</ProductTitle>
        <ProductRates rate={rate} />
        <ProductPrice>{price}$</ProductPrice>
      </Product>
    </>
  );
};

export default ProductShowcase;
