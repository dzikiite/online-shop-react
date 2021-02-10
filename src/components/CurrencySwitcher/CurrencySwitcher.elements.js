import styled from 'styled-components';
import { typography, colors, zIndex } from '../../utils/styles';

export const CurrencySwitcherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.light};
  z-index: ${zIndex.level1};
  border: 2px solid ${colors.lightGray};
  position: absolute;
  left: 0;
  bottom: 0;
  width: 150px;
  transform: translateY(100%);
  padding: 1rem .5rem;
`;

export const CurrencyText = styled.p`
  font-weight: ${typography.fontWeightMedium};
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;
