import ReactModal from "react-modal";
import s from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, imageUrl, alt }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className={s.modalContent}>
        <img src={imageUrl} alt={alt} />
      </div>
    </ReactModal>
  );
};

export default ImageModal;
