import styled from 'styled-components';
import { typography } from '../../utils/styles';
import { ImFacebook, ImTwitter } from 'react-icons/im';

export const FooterContainer = styled.footer`
  height: 35vh;
  display: flex;
  justify-content: center;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  margin: 0 3rem;
  align-items: flex-start;
  gap: 1rem;
`;

export const FooterLogo = styled.img``;

export const FooterText = styled.p`
  font-size: 0.8rem;
`;

export const FooterTitle = styled.h4`
  font-weight: ${typography.fontWeightMedium};
  font-size: 1.3rem;
`;

export const FooterSocial = styled.div`
display: flex;
gap: 2rem;
`

export const Facebook = styled(ImFacebook)`
  color: #385c8e;
  display: inline;
  cursor: pointer;
`;

export const Twitter = styled(ImTwitter)`
  color: #03a9f4;
  display: inline;
  cursor: pointer;
`;
