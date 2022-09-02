import React from 'react';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { addUser } from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async data => {
    const id = nanoid();
    await dispatch(addUser({ ...data, id: id }));
    reset();
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className={styles.form}>
      <input
        {...register('name')}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        className="input"
      />
      <input
        type="phone"
        {...register('number')}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        className="input"
      />
      <button type="submit" className="btn">
        Add Contact
      </button>
    </form>
  );
};

export { ContactForm };
