import { combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import {
  getUsers,
  addUser,
  deleteUser,
  filterUser,
} from './contactsOperations';

const itemsContact = createReducer([], {
  [getUsers.fulfilled]: (_, action) => action.payload,
  [addUser.fulfilled]: (state, action) => [...state, action.payload],
  [deleteUser.fulfilled]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const isLoading = createReducer(false, {
  [getUsers.pending]: () => true,
  [getUsers.fulfilled]: () => false,
  [getUsers.rejected]: () => false,
  [addUser.pending]: () => true,
  [addUser.fulfilled]: () => false,
  [addUser.rejected]: () => false,
  [deleteUser.pending]: () => true,
  [deleteUser.fulfilled]: () => false,
  [deleteUser.rejected]: () => false,
});

const error = createReducer(null, {
  [getUsers.rejected]: (_, action) => action.payload,
  [getUsers.fulfilled]: () => null,
  [addUser.rejected]: (_, action) => action.payload,
  [addUser.fulfilled]: () => null,
  [deleteUser.rejected]: (_, action) => action.payload,
  [deleteUser.fulfilled]: () => null,
});

const filterContact = createReducer('', {
  [filterUser]: (_, action) => action.payload,
});

export default combineReducers({
  itemsContact,
  isLoading,
  error,
  filterContact,
});
