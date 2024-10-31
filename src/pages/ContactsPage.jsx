import { useDispatch, useSelector } from "react-redux"
import ContactForm from "../components/ContactForm/ContactForm"
import ContactList from "../components/ContactList/ContactList"
import SearchBox from "../components/SearchBox/SearchBox"
import { selectContacts, selectError, selectLoading } from "../redux/contacts/selectors"
import { fetchContacts } from "../redux/contacts/operations"
import { useEffect } from "react"


const ContactsPage = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(selectContacts)
  const loading = useSelector(selectLoading)
  const err = useSelector(selectError)



  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])
  return (
    <div 
       className="hero min-h-screen bg-scroll"
       style={{
    backgroundImage: "url(https://www.contactsplus.com/wp-content/uploads/2021/10/Address-Book-Maintenance-4-Tips-and-How-Tos-scaled-e1633102016640-1024x640.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content m-auto w-full text-neutral-content text-center">
    <div className="">
      <h1 className="m-auto pb-10 text-5xl font-bold w-4/5 ">Your personal contact book is always at hand</h1>
        <ContactForm />
          <SearchBox />
          <div>
            {loading ? <span className="loading loading-ring loading-lg"></span> : (contacts.length > 0 ? <ContactList/> : <p className="font-bold text-3xl">You have no contact yet</p>)}
            {err && <h2>Sorry we have some trouble</h2>}
            
        </div>
        </div>
      </div>
    </div>

  )
}

export default ContactsPage


