import { useCallback, useState } from "react";

import { Modal } from "../blocks/Modal";

export const ImageCard = ({ image_url, caption, showCaption = true }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal((open) => !open);
  }, []);

  return (
    <div className="gallery__item">
      <div className="gallery__card">
        <img
          className="gallery__image"
          src={image_url}
          alt={caption}
          onClick={toggleModal}
        />
        {showCaption && <p className="gallery__caption">{caption}</p>}
      </div>
      <Modal show={showModal} onClose={toggleModal} title={caption}>
        <img className="gallery__image--model" src={image_url} alt={caption} />
      </Modal>
    </div>
  );
};
