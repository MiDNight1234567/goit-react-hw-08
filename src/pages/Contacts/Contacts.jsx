import { Helmet } from "react-helmet-async";

import css from "./Contacts.module.css";

import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

const Contacts = () => {
  return (
    <div className={css.container}>
      <Helmet>
        <title>Your phonebook</title>
      </Helmet>
      <h1 className={css.title}>Your phonebook</h1>
      <div className={css.infoCont}>
        <div className={css.functionalCont}>
          <ContactForm />
          <SearchBox />
        </div>
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
