import { useState } from 'react';
import Notiflix from 'notiflix';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contactsApi';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const { data } = useGetContactsQuery();
  const [addContact] = useCreateContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmitForm = async event => {
    event.preventDefault();
    try {
      data.find(contact => contact.name === name)
        ? Notiflix.Notify.info(`${name} is already in contacts.`)
        : (await addContact({ name, number })) &&
          Notiflix.Notify.success(`${name} added to your phonebook`);
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.input_form} onSubmit={handleSubmitForm}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
      />
      <label>Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInputChange}
      />
      <button>Add contact</button>
    </form>
  );
};
