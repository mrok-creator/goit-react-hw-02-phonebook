import { Component } from 'react';
import { nanoid } from 'nanoid';

import s from './phoneBook.module.css';

class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  addContacts = e => {
    e.preventDefault();
    this.setState(({ name, number, contacts }) => {
      const newContacts = {
        id: nanoid(),
        name,
        number,
      };
      return {
        contacts: [...contacts, newContacts],
        name: ' ',
        number: ' ',
      };
    });
  };

  deleteContacts = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(item => item.id !== id),
    }));
  };

  render() {
    const { name, number, contacts } = this.state;
    const elements = contacts.map(({ name, id, number }) => (
      <li className={s.item} key={id}>
        {name}: {number}
        <button
          type="button"
          className={s.btn}
          onClick={() => this.deleteContacts(id)}
        >
          Delete
        </button>
      </li>
    ));
    return (
      <>
        <div className={s.container}>
          <h2 className={s.title}>Phonebook</h2>
          <form className={s.box} onSubmit={this.addContacts}>
            <label htmlFor="name" className={s.text}>
              Contact's Name
            </label>
            <input
              value={name}
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              className={s.input}
            />
            <label htmlFor="tel" className={s.text}>
              Contact's Number
            </label>
            <input
              value={number}
              type="tel"
              name="number"
              id="tel"
              placeholder="Enter Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              className={s.input}
            />

            <button type="submit" className={s.btn}>
              Add Contact
            </button>
          </form>
        </div>
        <div className={s.container}>
          <h2 className={s.title}>Contacts</h2>
          <ul className={s.contacts}>{elements}</ul>
        </div>
      </>
    );
  }
}

export default PhoneBook;
