import { css } from 'styled-components';

export const colors = {
    blue: '#33A0FF',
    lighterBlue: '#40BFFF',
    darkBlue: '#223263',
    pink: '#FF4858',
    dark: '#22262A',
    light: '#FFFFFF',
    lightGray: '#F6F6F6',
    green: '#59ED98',
};

export const typography = {
    fontWeightVeryLight: '200',
    fontWeightLight: '300',
    fontWeightMedium: '500',
    fontWeightBold: '800', 
};

export const sizes = {
    desktop: 1150,
    tablet: 768,
    phone: 576,
};

export const zIndex = {
  level1: 100,
  level2: 200,
  level3: 300,
  level4: 400,
  level5: 500,
  level6: 600,
  level7: 700,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `;
  
    return acc
}, {});