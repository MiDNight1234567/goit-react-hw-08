import { Helmet } from "react-helmet-async";
import { FaPhone } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
import css from "./Home.module.css";
const Home = () => {
  return (
    <div className={css.homePage}>
      <Helmet>
        <title>Home phonebook</title>
      </Helmet>
      <p>
        Welcome to your <FaPhone size={24} color="#ef5c0d" />{" "}
        <FaAddressBook size={24} color="#ef5c0d" /> phonebook! <br />
        May every call be pleasant!
      </p>
    </div>
  );
};

export default Home;
