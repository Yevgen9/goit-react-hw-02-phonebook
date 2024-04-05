import React from "react";
// import ContactItem from "./ContactItem";

const ContactList = ({ onList }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {onList.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
