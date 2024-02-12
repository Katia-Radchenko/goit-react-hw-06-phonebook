import ContactForm from './ContactForm/ContactForm';
import { Title } from './Title.styled';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';




const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const data = JSON.parse(localStorage.getItem('my-books'));
  //   return data || INITIAL_STATE;
  // });
  // const [filterQuery, setFilterQuery] = useState('');
  //
  //
  // useEffect(() => {
  //   localStorage.setItem('my-books', JSON.stringify(contacts));
  //
  // }, [contacts]);
  //
  //
  // const formSubmitHandler = (contact) => {
  //   const isInContacts = contacts.some(
  //     ({ name }) => name.toLowerCase() === contact.name.toLowerCase(),
  //   );
  //
  //   if (isInContacts) {
  //     alert(`${contact.name} is already in contacts`);
  //     return;
  //   }
  //
  //   setContacts(prevContacts => [
  //     { id: nanoid(), ...contact },
  //     ...prevContacts,
  //   ]);
  // };
  //
  //
  // const filterChangeHandler = ({ target }) => {
  //   setFilterQuery(target.value);
  // };
  //
  // const visibleContacts = () => {
  //   const normalizedFilter = filterQuery.toLowerCase();
  //
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };
  //
  // const contactDeleteHandler = id => {
  //   setContacts(state => state.filter(contact => contact.id !== id));
  // };
  //
  // const items = visibleContacts();
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </>
  );
};


export default App;
