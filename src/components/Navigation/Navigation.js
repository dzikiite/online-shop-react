import React from 'react';


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
  MenuItem
} from './Navigation.elements';
import { Container } from '../../styles/globalStyles';
import logo from '../../assets/logo.svg';

const menuContent = [
    {title: 'Home', path: '/'},
    {title: 'About', path: '/about'},
    {title: 'Contact', path: '/contact'},
]

const Navigation = () => {
  return (
    <NavigationContainer>
      <Container isColumn>
        <NavigationTop>
          <Currency>
            USD
            <CurrencyArrow />
          </Currency>
          <UserMenu>
            <UserProfileIcon />
            <ShopSearchIcon />
            <ShopCartIcon />
          </UserMenu>
        </NavigationTop>
        <NavigationBottom>
            <Logo src={logo}/>
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
