import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './PhonebookForm.module.css'

export class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = evt => {
      evt.preventDefault();
      const isContactExists = this.props.addContact({ id: nanoid(6), ...this.state });
      if (!isContactExists) {
          this.reset();
      }
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.formContact} onSubmit={this.handleSubmit}>
        <label className={css.labelContact}>
          Name
                <input
                    className={css.inputContact}
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.labelContact}>
          Phone
                <input
                className={css.inputContact}
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button}>Add contact</button>
      </form>
    );
  }
}

