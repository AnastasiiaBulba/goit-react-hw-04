import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";
import fetchImages from "./services/api";
import "./App.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!searchQuery) return;

    const loadImage = async () => {
      try {
        const data = await fetchImages(searchQuery, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalImages(data.total);
      } catch (error) {
        setError("Error fetching images.");
        console.error("Error fetching images:", error);
      }
    };

    loadImage();
  }, [searchQuery, page]);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearchSubmit} />
      <Toaster position="top-right" />

      {error && <ErrorMessage message={error} />}

      <ImageGallery
        images={images}
        onImageClick={openModal}
        fetchImages={fetchImages}
        searchQuery={searchQuery}
        page={page}
      />

      {images.length < totalImages && <LoadMoreBtn onClick={loadMoreImages} />}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeModal}
        imageUrl={selectedImage?.urls?.regular}
        alt={selectedImage?.alt_description}
      />
    </div>
  );
};

export default App;
