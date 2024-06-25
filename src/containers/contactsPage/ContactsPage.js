import React, { useEffect, useState } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, handleNewContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [ duplicate, setDuplicate ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      const newContact = {
        email,
        name,
        phone
      };

      handleNewContact(newContact);

      setDuplicate(prevDuplicate => false);
      setEmail(prevEmail => '');
      setName(prevName => '');
      setPhone(prevPhone => '');
    };
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const duplicateContact = contacts.find((contact) => contact.name === name);
    if (duplicateContact !== undefined) {
      setDuplicate(prevDuplicate => true);
    } else {
      setDuplicate(prevDuplicate => false);
    };
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          email={email}
          name={name}
          duplicate={duplicate}
          phone={phone}
          setEmail={setEmail}
          setName={setName}
          setPhone={setPhone}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
