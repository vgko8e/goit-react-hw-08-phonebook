import { ContactItem } from './ContactItem/index';
import {
  Table,
  Typography,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsers } from 'redux/contacts/contactsOperations';
import { itemsSelector, filterSelector } from 'redux/contacts/contactsSelector';
import { useEffect } from 'react';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const ContactList = () => {
  const items = useSelector(itemsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const contacts = items?.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  useEffect(() => {
    isLoggedIn && dispatch(getUsers());
  }, [dispatch, isLoggedIn]);

  const deleteContact = id => {
    dispatch(deleteUser(id));
  };

  return (
    <Table>
      <TableHead>
        <TableRow sx={{ backgroundColor: 'gray' }}>
          <TableCell>
            <Typography
              variant="h3"
              gutterBottom
              component="p"
              sx={{ color: 'white' }}
            >
              №
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              variant="h3"
              gutterBottom
              component="p"
              sx={{ color: 'white' }}
            >
              Avatar
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              variant="h3"
              gutterBottom
              component="p"
              sx={{ color: 'white' }}
            >
              Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              variant="h3"
              gutterBottom
              component="p"
              sx={{ color: 'white' }}
            >
              Phone
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              variant="h3"
              gutterBottom
              component="p"
              sx={{ color: 'white' }}
            >
              Options
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {contacts.map(({ id, name, number }, index) => {
          return (
            <ContactItem
              index={index}
              key={id}
              id={id}
              name={name}
              phone={number}
              onDelete={deleteContact}
            />
          );
        })}
      </TableBody>
    </Table>
  );
};

export { ContactList };
