import { useState, useEffect } from 'react';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { nanoid } from 'nanoid';
import styles from './App.module.css';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storageContacts = JSON.parse(localStorage.getItem('contact'));
    return storageContacts ? storageContacts : [...initialContacts];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    const existingContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(normalizedName)
    );

    if (existingContact) {
      alert(`${normalizedName} is already in contacts`, 'sorry');
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(contacts => [contact, ...contacts]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const changeInput = e => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    const normalizedText = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedText)
    );
  };

  const filteredContacts = filterContacts();

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeInput} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};
