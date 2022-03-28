import Container from 'components/container/Container';
import Section from 'components/section/Section';
import ContactForm from 'components/contactForm/ContactForm';
import ContactList from 'components/contactList/ContactList';
import ContactFilter from 'components/contactFilter/ContactFilter';
import Header from 'components/header/Header';

const App = () => {
  return (
    <Header>
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm />
        </Section>

        <Section title={'Contacts'}>
          <ContactFilter />
          <ContactList />
        </Section>
      </Container>
    </Header>
  );
};

export default App;
