import { useState } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import ContactCard from "./components/ContactCard";


function App() {
  let [contacts, setContacts] = useState([])
  let [editContact, setEditContact] = useState({})
  let [isEdit, setIsEdit] = useState(false)
  function handleNewContact(newContact) {
    let newContactsArray = [...contacts]
    newContactsArray.push(newContact)
    setContacts(newContactsArray)
  }

  function handleDeleteContact(id) {
    let newContactsArray = contacts.filter(item => {
      return item.id !== id
    })
    setContacts(newContactsArray)
  }

  function handleEditIndex(index) {
    setIsEdit(true)
    setEditContact(contacts[index])
  }

  function handleSaveEditedContact(newContact) {
    let newContactsArray = contacts.map(item => {
      if (item.id === newContact.id) {
        return newContact
      }
      return item
    })
    setContacts(newContactsArray)
    setIsEdit(false)
  }

  return (
    <div className="App">
      <Navbar />

      <AddContact
        handleNewContact={handleNewContact}
      />
      {isEdit ? <ContactCard
        editContact={editContact}
        handleSaveEditedContact={handleSaveEditedContact}
      /> : null}
      <ContactList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditIndex={handleEditIndex}
      />


    </div>
  );
}

export default App;
