import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from 'redux/phonebook';

import { List, ListItem, Text, ItemBtn } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectors.getContacts);
  const filter = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id}>
          <Text>
            {contact.name}: {contact.number}
          </Text>
          <ItemBtn
            type="button"
            onClick={() => dispatch(actions.delContact(contact.id))}
          >
            Delete
          </ItemBtn>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
