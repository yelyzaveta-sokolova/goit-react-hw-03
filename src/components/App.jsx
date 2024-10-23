import { useState, useEffect } from "react";
import "./App.css";
import profiles from "../profiles.json";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";

function App() {
  const [contactsTel, setContactsTel] = useState(() => {
    const contactsInLS = localStorage.getItem("contactsTel");
    return contactsInLS ? JSON.parse(contactsInLS) : profiles;
  });

  useEffect(() => {
    localStorage.setItem("contactsTel", JSON.stringify(contactsTel));
  }, [contactsTel]);

  const onAddContact = (newContact) => {
    setContactsTel((lastContacts) => [...lastContacts, newContact]);
  };

  const onDeleteContact = (profileId) => {
    const updatedContacts = contactsTel.filter(
      (contactItem) => contactItem.id !== profileId
    );
    setContactsTel(updatedContacts);
  };
  const [filter, setFilter] = useState("");

  const filteredContacts = contactsTel.filter((contactItem) =>
    contactItem.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filter} searchFilter={setFilter} />
      <ContactList
        contactsTel={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;