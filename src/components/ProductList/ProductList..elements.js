import styled from 'styled-components';
import { typography, colors } from '../../utils/styles';

export const ProductListContainer = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: ${typography.fontWeightBold};
  text-transform: uppercase;
  padding: 1rem 0;
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.8rem;
`;
