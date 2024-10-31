import { useSelector } from "react-redux"
import { selectFilteredContacts } from "../../redux/contacts/slice"
import s from './ContactList.module.css'
import Contact from "../Contact/Contact"

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts)

    return (
        <ul className={s.ul}>
            {contacts.map(contact => (
                <li className={s.li} key={contact.id}>
                    <Contact contact={contact} createdAt={contact.createdAt}/>
                </li>
            ))}
      </ul>

  )
}

export default ContactList