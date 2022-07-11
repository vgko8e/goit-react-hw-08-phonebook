import PropTypes from 'prop-types';

export const ContactListItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li>
      {name}: {number}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
};
