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
        onChange={(e) => setName(prevName => e.target.value)}
      />
      <input 
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(prevEmail => e.target.value)}
      />
      <input 
        type="tel"
        value={phone}
        placeholder="Phone"
        pattern="/[1-9]-[0-9]{3}-[0-9]{3}-[0-9]{4}"
        onChange={(e) => setPhone(prevPhone => e.target.value)}
      />
    </form>
  );
};

