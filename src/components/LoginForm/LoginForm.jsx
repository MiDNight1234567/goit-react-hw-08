import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { FaSignInAlt } from "react-icons/fa";

import css from "./LoginForm.module.css";

import { apiLoginUser } from "../../redux/auth/operations";

const UserRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const onLogin = (formData) => {
    dispatch(apiLoginUser(formData));
  };
  const handleSubmit = (data, formActions) => {
    onLogin(data);
    formActions.resetForm();
  };

  return (
    <Formik
      validationSchema={UserRegisterSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <h2 className={css.formTitle}>Login</h2>

        <label className={css.label}>
          <span className={css.labelText}>Email:</span>
          <Field
            className={css.formInput}
            placeholder="YourEmail@gmail.com"
            type="text"
            name="email"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="email"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span className={css.labelText}>Password:</span>
          <Field
            className={css.formInput}
            placeholder="Enter your password"
            type="password"
            name="password"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="password"
            component="span"
          />
        </label>

        <button
          className={css.submitBtn}
          type="submit"
          title="Click to login user"
          aria-label="Login button"
        >
          Sign In
          <FaSignInAlt size={24} color="#261605" />
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
