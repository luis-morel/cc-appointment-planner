import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = (props) => {
  const {
    contact,
    contacts,
    date,
    name,
    time,
    setContact,
    setDate,
    setName,
    setTime,
    handleSubmit
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={name}
        onChange={(e) => setName(prevName => e.target.value)}
        placeholder="Name"
        type="text"
      />
      <input
        name="date"
        value={date}
        onChange={(e) => setDate(prevDate => e.target.value)}
        min={getTodayString()}
        type="date"
      />
      <input
        name="time"
        value={time}
        onChange={(e) => setTime(prevTime => e.target.value)}
        type="time"
      />
      <ContactPicker
        contacts={contacts}
        handleNewContact={(e) => setContact(prevContact => e.target.value)}
        name="contact"
        value={contact}
      />
      <input type="submit" value='Submit' />
    </form>
  );
};
