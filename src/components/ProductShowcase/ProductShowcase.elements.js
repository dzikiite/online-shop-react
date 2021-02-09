import styled from 'styled-components';
import { typography, colors } from '../../utils/styles';

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${colors.lightGray};
`;

export const ProductImage = styled.img``;

export const ProductTitle = styled.h4`
  color: ${colors.darkBlue};
  font-weight: ${typography.fontWeightBold};
`;

export const ProductPrice = styled.p`
  color: ${colors.lighterBlue};
  font-weight: ${typography.fontWeightBold};
`;
