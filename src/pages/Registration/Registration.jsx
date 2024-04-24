import { Helmet } from "react-helmet-async";

import RegisterForm from "../../components/RegistrationForm/RegistrationForm";

const Registration = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <RegisterForm />
    </>
  );
};

export default Registration;
