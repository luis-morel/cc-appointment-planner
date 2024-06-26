import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [ contacts, setContacts ] = useState([]);
  const [ appointments, setAppointments ] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const handleNewContact = (newContact) => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };
  const handleNewAppointment = (newAppointment) => {
    setAppointments(prevAppointments => [...prevAppointments, newAppointment]);
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={
        <ContactsPage
          contacts={contacts}
          handleNewContact={handleNewContact}
        /> /* Add props to ContactsPage */ 
      }/>
      <Route path={ROUTES.APPOINTMENTS} element={
        <AppointmentsPage 
          appointments={appointments}
          contacts={contacts}
          handleNewAppointment={handleNewAppointment}
        /> /* Add props to AppointmentsPage */
      }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
