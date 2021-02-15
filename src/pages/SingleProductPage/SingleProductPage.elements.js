import styled from 'styled-components';
import { typography, colors } from '../../utils/styles';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

export const ProductContainer = styled.main`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled.img``;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleArea = styled.div``;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: ${typography.fontWeightMedium};
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  color: ${colors.lighterBlue};
  font-weight: ${typography.fontWeightBold};
`;

export const Info = styled.p``;

export const VariantArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonsArea = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialMediaArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

export const FacebookIcon = styled(FaFacebookF)`
  color: ${colors.light};
  font-size: 1.2rem;
`;

export const TwitterIcon = styled(AiOutlineTwitter)`
  color: ${colors.light};
  font-size: 1.2rem;
`;

export const Button = styled.button`
  width: 50%;
  display: block;
  height: 45px;
  text-align: center;
  border-radius: 6px;
  color: ${colors.light};
  font-size: 1.2rem;
  font-weight: ${typography.fontWeightMedium};
  outline: none;
  border: none;
  cursor: pointer;
`;

export const FacebookButton = styled(Button)`
  background-color: #385c8e;

  &:hover {
    background-color: #2b4f81;
  }
`;

export const TwitterButton = styled(Button)`
  background-color: #03a9f4;

  &:hover {
    background-color: #00a3ed;
  }
`;
