

export function HomePage() { 
	return(
		<div>
      <Section>
        <Title>Phonebook</Title>
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