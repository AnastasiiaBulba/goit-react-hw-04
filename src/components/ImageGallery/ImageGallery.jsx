import { useState, useEffect } from "react";
import ImageCard from "../ImageCard/ImageCard";
import Loader from "../Loader/Loader";
import s from "./ImageGallery.module.css";

const ImageGallery = ({
  images,
  onImageClick,
  fetchImages,
  searchQuery,
  page,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        await fetchImages(searchQuery, page);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [searchQuery, page, fetchImages]);

  return (
    <div className={s.wrapperGallery}>
      <ul className={s.gallery}>
        {images.map((image) => (
          <li key={image.id} className={s.galleryItem}>
            <ImageCard image={image} onClick={onImageClick} />
          </li>
        ))}
      </ul>

      {loading && <Loader />}
    </div>
  );
};

export default ImageGallery;
