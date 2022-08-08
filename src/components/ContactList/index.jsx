import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContact, getFilter } from 'redux/contactSlice';

import styles from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);

  const filterContacts = () => {
    const normalizedText = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedText)
    );
  };

  const deleteContactClick = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = filterContacts();

  return (
    <ul className={styles.contact_list}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name} {contact.number}
          <button type="button" onClick={() => deleteContactClick(contact.id)}>
            Delete user
          </button>
        </li>
      ))}
    </ul>
  );
};
