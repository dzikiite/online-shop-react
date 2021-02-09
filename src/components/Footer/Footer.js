import React from 'react';
import logo from '../../assets/logo.svg';

import {
  FooterContainer,
  FooterColumn,
  FooterLogo,
  FooterText,
  FooterTitle,
  FooterSocial,
  Facebook,
  Twitter,
} from './Footer.elements';
import { Container } from '../../styles/globalStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterColumn>
          <FooterLogo src={logo} />
          <FooterText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
          </FooterText>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>
            Follow Us
          </FooterTitle>
          <FooterText>
          Since the 1500s, when an unknown printer took a galley of type and scrambled.
          </FooterText>
          <FooterSocial>
            <Facebook />
            <Twitter />
          </FooterSocial>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>
            Contact Us
          </FooterTitle>
          <FooterText>
            E-Comm, 4578<br />Marmora Road,<br />Glasgow D04 89GR
          </FooterText>
        </FooterColumn>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
