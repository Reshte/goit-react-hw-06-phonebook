import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from 'components/ContactForm/ContactForm'
import { FilterForm } from './FilterForm/FilterForm'
import { Wrapper, Title, TitleContacts } from './App.styled'
import PropTypes from 'prop-types';

export function App() {
    
  return (
        <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm />
        <TitleContacts>Contacts</TitleContacts>      
        <FilterForm />
        <ContactList />
        </Wrapper>
  )    
}

App.propTypes = {
      contacts: PropTypes.arrayOf(
                PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string,
                number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  handelFormSbmit: PropTypes.func,
  deleteContact: PropTypes.func,
  filterContact: PropTypes.func,
    };

