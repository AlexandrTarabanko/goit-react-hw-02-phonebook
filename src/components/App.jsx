import { Component } from 'react';
import { nanoid } from 'nanoid';
import { number } from 'prop-types';

// console.log(nanoid());
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  nameInpitId = nanoid();
  numberInputId = nanoid();
  filterInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addContact = e => {
    e.preventDefault();
    const { name, number } = this.state;
    let contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

    this.reset();
  };

  reset = () => {
    const { name } = this.state;
    this.setState({ name: '' });
  };

  filterContacts() {
    const { filter, contacts } = this.state;
    const query = filter.toLowerCase();

    const contactToFilter = contacts.filter(contact =>
      contact.name.toLowerCase().includes(query)
    );

    if (!contactToFilter) {
      return 'Not found';
    }

    return contactToFilter;
  }

  render() {
    const { name, number, filter, contacts } = this.state;
    console.log(contacts);
    return (
      <>
        <form onSubmit={this.addContact}>
          <label htmlFor={this.nameInpitId}>Name</label>
          <br />
          <input
            value={name}
            onChange={this.handleChange}
            id={this.nameInpitId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <br />
          <label htmlFor={this.numberInputId}>Number</label>
          <br />
          <input
            value={number}
            onChange={this.handleChange}
            id={this.numberInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <br />
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <label htmlFor={this.filterInputId}>Find contacts by name</label>
        <br />
        <input
          value={filter}
          onChange={this.handleChange}
          id={this.filterInputId}
          name="filter"
          type="text"
        />
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
