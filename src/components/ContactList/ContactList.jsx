import PropTypes from 'prop-types';
import {ContactListItem} from './ContactListItem/ContactListItem'
import { List } from './ContactList.styled'
import { useSelector } from "react-redux";
import { getcontacts } from '../../redux/selectors'


export const ContactList = () => {
    const contacts = useSelector(getcontacts)
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