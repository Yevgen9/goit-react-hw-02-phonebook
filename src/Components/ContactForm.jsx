import React, { Component } from "react";
import { nanoid } from "nanoid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);

    // reset form
    this.reset();
  };

  // reset form
  reset = () => {
    this.setState({ name: "", number: "" });
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.name}
              id={this.nameInputId}
              required
            />
          </label>

          <label htmlFor={this.numberInputId}>
            Number
            <input
              onChange={this.handleChange}
              type="tel"
              name="number"
              value={this.state.number}
              id={this.numberInputId}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>{" "}
      </div>
    );
  }
}

export default ContactForm;
