import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact, getFilter } from 'redux/filterSlice';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <label className={styles.filter_label}>
      Find contacts by name:
      <input
        className={styles.filter_input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};
