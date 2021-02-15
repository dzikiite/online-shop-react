import React from 'react';

import ContactForm from '../../components/ContactForm/ContactForm';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import { ContactPageContainer } from './ContactPage.elements';
import { Container } from '../../styles/globalStyles';

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <Container>
        <GoogleMap />
        <ContactForm />
      </Container>
    </ContactPageContainer>
  );
};

export default ContactPage;
