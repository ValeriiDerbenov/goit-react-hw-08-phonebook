import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import Loader from "components/Loader/Loader";
import Section from "components/Section/Section";
import React from "react";

import { useSelector } from "react-redux";
import { selectContacts, selectError, selectIsLoading } from "../../redux/contacts/contacts.selector";


export function HomePage() { 
	const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

	return(
		<div>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
      </Section>
      <Section>
      {contacts.length > 0 ? (<Filter />) : (<h3>Your phonebook is empty. Add first contact!</h3>)}
      {error !== null && <p className="textError">{error}</p>}
      {isLoading && <Loader />}
        {contacts.length > 0 && <ContactList />}
      </Section>
    </div>
	);
}