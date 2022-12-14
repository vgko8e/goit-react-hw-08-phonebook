import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsOperations';
import { filterSelector } from 'redux/contacts/contactsSelector';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { NavLink } from 'react-router-dom';

const Filter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <div>
      <label className={styles.label}>
        Find contact by name
        <input
          type="text"
          name="name"
          onChange={changeFilter}
          value={filter}
          className="input"
        />
      </label>
      <NavLink to="/contacts" className={styles.linkup}>
        <KeyboardArrowUpIcon sx={{ fontSize: 60, color: 'blue' }} />
      </NavLink>
    </div>
  );
};

export { Filter };
