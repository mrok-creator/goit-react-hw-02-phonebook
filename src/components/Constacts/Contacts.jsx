import { Component } from 'react';

import s from './contacts.module.css';

class Contacts extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <div className={s.container}>
          <h2 className={s.title}>Phonebook</h2>
          <form className={s.box}>
            <label htmlFor="" className={s.text}>
              Name
            </label>
            <input type="text" />
            <button type="submit" className={s.btn}>
              Add Contact
            </button>
          </form>
        </div>
        <div>
          <h2 className={s.title}>Contacts</h2>
          <ul>
            <li className={s.item}></li>
          </ul>
        </div>
      </>
    );
  }
}

export default Contacts;
