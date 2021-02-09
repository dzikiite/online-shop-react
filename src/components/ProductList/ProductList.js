import React from 'react';
import { products } from '../../api/products';

import {
  ProductListContainer,
  Title,
  ProductsList,
} from './ProductList..elements';
import ProductShowcase from '../ProductShowcase/ProductShowcase';
import { Container } from '../../styles/globalStyles';

const ProductList = () => {
  const product = products.map(product => <ProductShowcase {...product} />);

  return (
    <ProductListContainer>
      <Container isColumn>
        <Title>Best Seller</Title>
        <ProductsList>{product}</ProductsList>
      </Container>
    </ProductListContainer>
  );
};

export default ProductList;
