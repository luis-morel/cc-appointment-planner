import React from "react";
import ContactPicker from '../contactPicker/ContactPicker.js';

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
        type="text"
      />
      <input
        name="date"
        value={date}
        min={getTodayString()}
        type="date"
      />
      <input
        name="time"
        value={time}
        type="time"
      />
      <ContactPicker contacts={contacts}/>
      <input type="submit" />
    </form>
  );
};
