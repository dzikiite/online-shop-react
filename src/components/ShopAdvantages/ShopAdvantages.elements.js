import styled from 'styled-components';
import { typography, colors } from '../../utils/styles';
import { FaShippingFast } from 'react-icons/fa';
import { RiRefund2Fill } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';

export const AdvantagesContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  padding: 4rem 0;
  background-color: ${colors.lightGray};
`;

export const Advantages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  text-align: center;
  gap: .4rem;
`;

export const ShippingIcon = styled(FaShippingFast)`
  font-size: 5rem;
  color: ${colors.pink};
`;

export const RefundIcon = styled(RiRefund2Fill)`
  font-size: 5rem;
  color: ${colors.pink};
`;

export const SupportIcon = styled(BiSupport)`
  font-size: 5rem;
  color: ${colors.pink};
`;

export const AdvantagesTitle = styled.h3`
font-size: 2rem;
font-weight: ${typography.fontWeightMedium};
text-transform: uppercase;
`

export const AdvantagesText = styled.p`
font-size: .8rem;
`