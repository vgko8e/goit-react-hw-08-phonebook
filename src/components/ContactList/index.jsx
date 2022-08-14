import React from 'react';
import { getFilter } from 'redux/filterSlice';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsApi';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const { data, isFetching } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(getFilter);

  const filterContacts = () => {
    if (filter === '') {
      return data;
    }
    const normalizedText = filter.toLowerCase();
    return data.filter(({ name }) =>
      name.toLowerCase().includes(normalizedText)
    );
  };

  const filteredContacts = filterContacts();

  if (isFetching) {
    return <p>Loading...</p>;
  }
  return (
    <ul className={styles.contact_list}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name} {contact.number}
          <button type="button" onClick={() => deleteContact(contact.id)}>
            Delete user
          </button>
        </li>
      ))}
    </ul>
  );
};
