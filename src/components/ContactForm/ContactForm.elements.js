import styled from 'styled-components';
import { typography, colors } from '../../utils/styles';

export const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`;

export const ContactTitle = styled.h3`
  font-size: 2rem;
  font-weight: ${typography.fontWeightMedium};
`;

export const ContactText = styled.p``;

export const NameInputColumn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;

export const FirstnameInput = styled.input`
  outline: none;
  border: 2px solid ${colors.lighterBlue};
  border-radius: 5px;
  height: 35px;
  width: 100%;
  padding: 0 1rem;

  &:focus {
    border: 2px solid ${colors.darkBlue};
  }
`;

export const LastnameInput = styled(FirstnameInput)``;

export const MessageInput = styled.textarea`
outline: none;
border: 2px solid ${colors.lighterBlue};
border-radius: 5px;
width: 100%;
padding: 1rem;
resize: vertical;

&:focus {
  border: 2px solid ${colors.darkBlue};
}
`;

export const SubmitButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  background-color: ${colors.lighterBlue};
  color: ${colors.light};
  width: 50%;
  height: 40px;
  border-radius: 5px;
  font-weight: ${typography.fontWeightBold};
  text-transform: uppercase;

  &:hover {
    border: 2px solid ${colors.darkBlue};
  }
`;

export const ValidationInfo = styled.p`
color: ${({ isError }) => isError ? colors.pink : colors.green};
`
