import { TailSpin } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./Loader.module.css";

const Loader = () => {
  <div className={s.loader}>
    <TailSpin color="#00BFFF" height={50} width={50} />
  </div>;
};

export default Loader;
