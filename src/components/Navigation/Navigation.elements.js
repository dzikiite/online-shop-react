import styled from 'styled-components';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { BiCart } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { typography, colors } from '../../utils/styles';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.header`
  width: 100vw;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NavigationTop = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem .5rem 1rem;
  position: relative;

  &::after {
    position: absolute;
    bottom: 0;
    width: 110vw;
    display: block;
    content: '';
    border-bottom: 1px solid #f2f2f2;
    transform: translateX(-15%);
  }
`;

export const NavigationBottom = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Currency = styled.p`
  text-transform: uppercase;
  font-weight: ${typography.fontWeightMedium};
  cursor: pointer;
`;

export const CurrencyArrow = styled(IoMdArrowDropdown)`
font-size: .8rem;
`

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: right;
`;

export const UserProfileIcon = styled(AiOutlineUser)`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ShopSearchIcon = styled(AiOutlineSearch)`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ShopCartIcon = styled(BiCart)`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Logo = styled.img``;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

export const MenuItem = styled(NavLink)`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: ${typography.fontWeightMedium};
  text-decoration: none;
  color: ${colors.dark};

  &:hover {
    color: ${colors.lighterBlue};
  } 

  &.active {
    color: ${colors.lighterBlue};
  }
`;
