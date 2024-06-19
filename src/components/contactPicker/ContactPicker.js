import React from "react";

export const ContactPicker = ({ contacts, handleNewContact, name, value}) => {
  return (
    <select 
      onChange={handleNewContact}
      name={name}
      value={value}
    >
      <option default value="">No Contact Selected</option>
      {contacts.map((contact, i) => {
        return (
          <option key={i} value={contact.name}>{contact.name}</option>
        )
      })}
    </select>
  );
};
