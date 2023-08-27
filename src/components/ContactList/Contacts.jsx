import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ContactStyle, ButtonStyle } from './Contacts.styled';

export function Contacts({ contact }) {
  const dispatch = useDispatch();
  const { name, number, id } = contact;
  const onDelItem = () => dispatch(deleteContact(id));
  return (
    <ContactStyle>
      <p>
        {name} : {number}
      </p>
      <ButtonStyle type="button" onClick={onDelItem}>
        Delete
      </ButtonStyle>
    </ContactStyle>
  );
}

Contacts.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
