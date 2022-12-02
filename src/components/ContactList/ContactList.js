import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getFilter, getContacts } from 'redux/contactSlice';
import { DeleteBtn } from './ContactList.styled';

const filterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  console.log('contacts', contacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const visibleContacts = filterContacts(contacts, filter);
  //   const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      {!contacts.length && (
        <p className="inputName">Your contactlist is empty</p>
      )}
      {!visibleContacts.length && Boolean(contacts.length) && (
        <p className="inputName">No contacts found</p>
      )}
      <table>
        <thead>
          {visibleContacts.map(({ id, name, number }) => {
            const handleDelete = () => dispatch(deleteContact(id));

            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{number}</td>
                <td>
                  <DeleteBtn type="button" onClick={handleDelete}>
                    Delete
                  </DeleteBtn>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </>
  );
};
