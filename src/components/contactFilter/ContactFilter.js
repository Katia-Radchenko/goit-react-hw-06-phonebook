import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from 'redux/phonebook';
import { InputLabel, FormInput } from './ContactFilter.styled';

const ContactFilter = () => {
  const filter = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  return (
    <InputLabel>
      Find contacts by name:
      <FormInput
        type="text"
        name="filter"
        value={filter}
        onChange={event =>
          dispatch(actions.changeFilter(event.currentTarget.value))
        }
      ></FormInput>
    </InputLabel>
  );
};

export default ContactFilter;
