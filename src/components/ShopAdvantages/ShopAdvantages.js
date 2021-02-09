import React from 'react';

import {
  AdvantagesContainer,
  Advantages,
  ShippingIcon,
  RefundIcon,
  SupportIcon,
  AdvantagesTitle,
  AdvantagesText,
} from './ShopAdvantages.elements';
import { Container } from '../../styles/globalStyles';

const ShopAdvantages = () => {
  const advantagesDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

  return ( 
    <AdvantagesContainer>
      <Container isCenter>
        <Advantages>
          <ShippingIcon />
          <AdvantagesTitle>
            Free Shipping
          </AdvantagesTitle>
          <AdvantagesText>
            {advantagesDescription}
          </AdvantagesText>
        </Advantages>
        <Advantages>
          <RefundIcon />
          <AdvantagesTitle>
            100% Refund
          </AdvantagesTitle>
          <AdvantagesText>
            {advantagesDescription}
          </AdvantagesText>
        </Advantages>
        <Advantages>
          <SupportIcon />
          <AdvantagesTitle>
            Support 24/7
          </AdvantagesTitle>
          <AdvantagesText>
            {advantagesDescription}
          </AdvantagesText>
        </Advantages>
      </Container>
    </AdvantagesContainer>
   );
}
 
export default ShopAdvantages;