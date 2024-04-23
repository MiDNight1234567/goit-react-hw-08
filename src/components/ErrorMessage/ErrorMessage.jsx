import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div>
      <h2 className={css.error}>
        Whoops, something went wrong! Please try reloading this page!
      </h2>
    </div>
  );
};

export default ErrorMessage;
