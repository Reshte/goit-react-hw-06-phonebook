// import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from "../../../redux/reducer"

export const ContactListItem = ({ id, name, number }) => {
     console.log( deleteContact)
       const dispatch = useDispatch()
     // const handleDelete = () => dispatch(deleteContact(id));
     return (  
<Item key={id}>
           <p>{name} : {number}</p>
<Button type='button' onClick={() => dispatch(deleteContact(id))}>Delete</Button>
</Item>)  
}