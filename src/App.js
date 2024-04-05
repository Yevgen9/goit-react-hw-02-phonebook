import React, { Component } from "react";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHadler = (data) => {
    console.log(data);
  };

  render() {
    return (
      <>
        <ContactForm onSubmit={this.formSubmitHadler} />
        <ContactList onList={contacts} />
        <Filter />
      </>
    );
  }
}

export default App;
