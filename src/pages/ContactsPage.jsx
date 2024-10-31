import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";
import { useEffect } from "react";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const err = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div
      className="hero min-h-screen bg-scroll"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243961.jpg?t=st=1730385297~exp=1730388897~hmac=7ebb8fd10bbd53922cc0b346709439b0a7f2205a71f38b4387f60cbb358dcb9b&w=1380)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content m-auto w-full text-neutral-content text-center">
        <div className="">
          <h1 className="m-auto pb-10 text-5xl font-bold w-4/5 ">
            Твій записник завжди під рукою
          </h1>
          <ContactForm />
          <SearchBox />
          <div>
            {loading ? (
              <span className="loading loading-ring loading-lg"></span>
            ) : contacts.length > 0 ? (
              <ContactList />
            ) : (
              <p className="font-bold text-3xl">Ще немає контактів</p>
            )}
            {err && <h2>Йой шось пішло не так</h2>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
