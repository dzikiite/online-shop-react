import React, { useState } from 'react';
import { FIELDS_REQUIRED, SUCCESS } from '../../utils/consts';

import {
  ContactFormContainer,
  ContactTitle,
  ContactText,
  NameInputColumn,
  FirstnameInput,
  LastnameInput,
  MessageInput,
  SubmitButton,
  ValidationInfo,
} from './ContactForm.elements';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleFormChange = e => {
    const { name, value } = e.target;
    if (name === 'firstName') setFirstName(value);
    else if (name === 'lastName') setLastName(value);
    else setMessage(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (firstName && lastName && message) {
      setFormStatus(SUCCESS);
      setFirstName('');
      setLastName('');
      setMessage('');
    } else setFormStatus(FIELDS_REQUIRED);
  };

  const formMessage = formStatus ? (
    formStatus === SUCCESS ? (
      <ValidationInfo>{formStatus}</ValidationInfo>
    ) : (
      <ValidationInfo isError>{formStatus}</ValidationInfo>
    )
  ) : null;

  return (
    <ContactFormContainer onSubmit={handleFormSubmit}>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactText>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever.Since the 1500s, when an unknown printer.
      </ContactText>
      <NameInputColumn>
        <FirstnameInput
          placeholder="First name..."
          name="firstName"
          value={firstName}
          onChange={handleFormChange}
        />
        <LastnameInput
          placeholder="Last name..."
          name="lastName"
          value={lastName}
          onChange={handleFormChange}
        />
      </NameInputColumn>
      <MessageInput
        placeholder="Message..."
        name="message"
        value={message}
        onChange={handleFormChange}
      />
      <SubmitButton type="submit">Send Message</SubmitButton>
      {formMessage}
    </ContactFormContainer>
  );
};

export default ContactForm;
