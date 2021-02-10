import React, { useState } from 'react';
import { USD, EUR } from '../../utils/consts';
import { useSelector } from 'react-redux';

import {
  NavigationContainer,
  NavigationTop,
  NavigationBottom,
  Currency,
  CurrencyArrow,
  UserMenu,
  UserProfileIcon,
  ShopCartIcon,
  ShopSearchIcon,
  Logo,
  Menu,
  MenuItem,
} from './Navigation.elements';
import { Container } from '../../styles/globalStyles';
import logo from '../../assets/logo.svg';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';

const menuContent = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const Navigation = () => {
  const [isCurrencySwitcherOpen, setIsCurrencySwitcherOpen] = useState(false);

  const currency = useSelector(store => store.global.currency);

  const handleOpenCurrencyMenu = () =>
    setIsCurrencySwitcherOpen(prevValue => !prevValue);

  return (
    <NavigationContainer>
      <Container isColumn>
        <NavigationTop>
          <Currency onClick={handleOpenCurrencyMenu}>
            {currency === USD ? USD : EUR}
            <CurrencyArrow />
          </Currency>
          {isCurrencySwitcherOpen ? (
            <CurrencySwitcher handleOpenCurrencyMenu={handleOpenCurrencyMenu} />
          ) : null}
          <UserMenu>
            <UserProfileIcon />
            <ShopSearchIcon />
            <ShopCartIcon />
          </UserMenu>
        </NavigationTop>
        <NavigationBottom>
          <Logo src={logo} />
          <Menu>
            {menuContent.map(item => (
              <MenuItem key={item.title} exact to={item.path}>
                {item.title}
              </MenuItem>
            ))}
          </Menu>
        </NavigationBottom>
      </Container>
    </NavigationContainer>
  );
};

export default Navigation;
