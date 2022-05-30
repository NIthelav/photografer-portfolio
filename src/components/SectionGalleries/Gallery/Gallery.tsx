import React, { FC, useState } from "react";
import { cn } from "../../../cn";
import { Modal } from "../../Modal/Modal";

import "./Gallery.css";

const block = cn("gallery");

interface Props {
  images: string[];
  name: string;
}

export const Gallery: FC<Props> = ({ images, name }) => {
  const [activeModal, setActiveModal] = useState(-1);
  return (
    <div className={block()}>
      {images.map((src, idx) => (
        <img
          key={src + idx}
          src={src}
          alt={name + idx}
          className={block("image", [`grid-${idx + 1}`])}
          onClick={() => setActiveModal(idx)}
        />
      ))}
      <Modal
        className={block("modal")}
        isVisible={activeModal !== -1}
        onClose={() => setActiveModal(-1)}
      >
        {activeModal !== -1 && (
          <img
            src={images[activeModal]}
            className={block("modal-image")}
            alt=""
          />
        )}
      </Modal>
    </div>
  );
};
