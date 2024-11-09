import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  //   if (!images || images.length === 0) {
  //     return null;
  //   }

  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li key={image.id} className={s.galleryItem}>
          {/* <ImageCard src={image.urls.small} alt={image.alt_description} /> */}
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
