import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem/ContactListItem'
import { List } from './ContactList.styled'
import { useSelector } from "react-redux";
import { getcontacts } from '../../redux/selectors'
import { getFilter } from '../../redux/filterSlice'



const getVisibleTasks = (contacts, filter) => {
    // contacts.filter(contact => )
    };

export const ContactList = () => {
    const contacts = useSelector(getcontacts)
    const filter = useSelector(getFilter);
    console.log(contacts)
    console.log(filter)
     getVisibleTasks(contacts, filter)
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