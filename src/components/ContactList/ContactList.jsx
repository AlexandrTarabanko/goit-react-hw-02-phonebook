import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return contacts.length ? (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            id="deleteBtn"
            className={css.deleteBtn}
            type="button"
            onClick={e => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p>You haven't added anything yet</p>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
