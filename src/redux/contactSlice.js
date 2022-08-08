import { createSlice } from '@reduxjs/toolkit';
import initialContact from './initialContacts';

const initialState = {
  contacts: {
    items: initialContact,
    filter: '',
  },
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },

    filterContact(state, action) {
      state.contacts.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;

export const getContact = state => state.contacts.contacts.items;
export const getFilter = state => state.contacts.contacts.filter;
