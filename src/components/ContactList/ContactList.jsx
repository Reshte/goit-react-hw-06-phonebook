import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem/ContactListItem'
import { List } from './ContactList.styled'
import { useSelector } from "react-redux";
import { getcontacts } from '../../redux/selectors'
import { getFilter } from '../../redux/selectors'

const getVisibleContacts = (contacts, filter) => {
    contacts.filter(({name})=> name.toLowerCase().includes(filter))};

export const ContactList = () => {
    const contacts = useSelector(getcontacts)
     const filter = useSelector(getFilter);
    console.dir(filter)
    
      const visibleContacts = getVisibleContacts(contacts, filter)
           return ( 
            <List>
                   {contacts.map(({ id, name, number }) => (
                       <ContactListItem key={id} id={id} name={name} number={number}/>))}
            </List> )
}

ContactList.proptype ={
    contactsList:PropTypes.array,
    onDeleteContact:PropTypes.func,
}