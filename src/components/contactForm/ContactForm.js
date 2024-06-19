import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={name}
        placeholder="Name"
        onChange={setName}
      />
      <input 
        type="email"
        value={email}
        placeholder="Email"
        onChange={setEmail}
      />
      <input 
        type="tel"
        value={phone}
        placeholder="Phone"
        pattern="/[1-9]-[0-9]{3}-[0-9]{3}-[0-9]{4}"
        onChange={setPhone}
      />
    </form>
  );
};

