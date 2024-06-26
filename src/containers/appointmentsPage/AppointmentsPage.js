import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, handleNewAppointment }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [ name, setName ] = useState('');
  const [ contact, setContact ] = useState('');
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    const newAppointment = {
      name,
      contact,
      date,
      time
    };

    handleNewAppointment(newAppointment);

    setName(prevName => '');
    setContact(prevContact => {});
    setDate(prevDate => '');
    setTime(prevTime => '');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contact={contact}
          date={date}
          name={name}
          time={time}
          contacts={contacts}
          setContact={setContact}
          setDate={setDate}
          setName={setName}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
          data={appointments}
        />
      </section>
    </div>
  );
};