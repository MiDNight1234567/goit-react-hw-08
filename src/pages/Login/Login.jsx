import { Helmet } from "react-helmet-async";

import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
};

export default Login;
