import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filterValue, handleChange }) => {
  const filterInputId = nanoid();

  return (
    <div className={css.field}>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        className={css.input}
        value={filterValue}
        onChange={handleChange}
        id={filterInputId}
        name="filter"
        type="text"
      />
    </div>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
