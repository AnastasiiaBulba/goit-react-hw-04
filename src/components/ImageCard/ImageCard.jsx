import s from "./ImageCard.module.css";

// const ImageCard = (src, alt, onClick) => {
//   <div className={s.card} onClick={onClick}>
//     <img src={src} alt={alt} className={s.image} />
//   </div>;
// };

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={s.card} onClick={() => onClick(image)}>
      <img
        src={image.urls.thumb}
        alt={image.alt_description}
        className={s.image}
      />
    </div>
  );
};

export default ImageCard;
