import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.moreBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
