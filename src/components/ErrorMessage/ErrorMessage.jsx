import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ massage }) => {
  <div className={s.erMes}>
    <p>{massage}</p>
  </div>;
};

export default ErrorMessage;
