import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

import {
  Container,
  PageTitle,
  ContactsTitle,
  TagLineBox,
  ContactFormBox,
} from './App.styled';

export const App = () => {
  return (
    <Container>
      <PageTitle>Phonebook</PageTitle>
      <TagLineBox>
        <ContactFormBox>
          <ContactsTitle>Contact form</ContactsTitle>
          <ContactForm />
        </ContactFormBox>
        <div>
          <ContactsTitle>Contacts List</ContactsTitle>
          <ContactFilter />
          <ContactList />
        </div>
      </TagLineBox>
    </Container>
  );
};
