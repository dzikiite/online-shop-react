import styled from 'styled-components';
import { typography, colors } from '../../utils/styles';

import Banner from '../../assets/hero-banner.png';

export const HeroContainer = styled.div`
  width: 100vw;
  height: 55vh;
  background-image: url(${Banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;

export const Title = styled.h1`
  color: ${colors.light};
  font-weight: ${typography.fontWeightBold};
  font-size: 3rem;
`;
