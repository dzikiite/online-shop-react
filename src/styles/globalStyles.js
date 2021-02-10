import styled, { createGlobalStyle } from 'styled-components';
import { typography, colors } from '../utils/styles';

const GlobalStyle = createGlobalStyle`
*, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
} 

body {
    background-color: ${colors.white};
    font-family: 'Poppins', sans-serif;
    font-weight: ${typography.fontWeightLight};
    overflow-x: hidden;
}
`;

export const Container = styled.div`
width: 100%;
max-width: 1300px;
display: flex;
align-items: center;
justify-content: ${({ isCenter }) => isCenter ? 'center' : 'space-between'};
flex-direction: ${({ isColumn }) => isColumn ? 'column' : 'row'};
`

export default GlobalStyle;
