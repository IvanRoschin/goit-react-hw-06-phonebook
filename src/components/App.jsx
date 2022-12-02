import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <>
      <ContactForm />
      <ContactList />
      <ContactFilter />
    </>
  );
};
