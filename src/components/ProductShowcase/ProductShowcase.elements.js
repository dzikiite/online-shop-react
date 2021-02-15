import styled from 'styled-components';
import { typography, colors } from '../../utils/styles';
import { Link } from 'react-router-dom';

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${colors.lightGray};
  gap: .5rem;
`;

export const ProductImage = styled.img``;

export const ProductTitle = styled(Link)`
  color: ${colors.darkBlue};
  font-weight: ${typography.fontWeightBold};
  text-decoration: none;
`;

export const ProductPrice = styled.p`
  color: ${colors.lighterBlue};
  font-weight: ${typography.fontWeightBold};
`;
