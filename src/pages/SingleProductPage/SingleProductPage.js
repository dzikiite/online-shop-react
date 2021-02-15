import React from 'react';
import { products } from '../../api/products';

import {
  ProductContainer,
  ProductImage,
  ProductInfoContainer,
  TitleArea,
  Title,
  InfoArea,
  Price,
  Info,
  VariantArea,
  ButtonsArea,
  SocialMediaArea,
  FacebookIcon,
  TwitterIcon,
  FacebookButton,
  TwitterButton,
} from './SingleProductPage.elements';
import { Container } from '../../styles/globalStyles';
import ProductRates from '../../components/ProductRates/ProductRates';

const SingleProductPage = props => {
  const productId = props.location.search.substr(1);
  const product = products.find(product => product.id === productId);
  const { description, image, price, rate, title } = product;

  return (
    <ProductContainer>
      <Container>
        <ProductImage src={image} />
        <ProductInfoContainer>
          <TitleArea>
            <Title>{title}</Title>
            <ProductRates rate={rate} />
          </TitleArea>
          <InfoArea>
            <Price>{price}</Price>
            <Info>Availability: In stock</Info>
            <Info>Category: Accessories</Info>
            <Info>Free Shipping</Info>
          </InfoArea>
          <VariantArea></VariantArea>
          <ButtonsArea></ButtonsArea>
          <SocialMediaArea>
            <FacebookButton>
              <FacebookIcon /> Share on Facebook
            </FacebookButton>
            <TwitterButton>
              <TwitterIcon /> Share on Twitter
            </TwitterButton>
          </SocialMediaArea>
        </ProductInfoContainer>
      </Container>
    </ProductContainer>
  );
};

export default SingleProductPage;
