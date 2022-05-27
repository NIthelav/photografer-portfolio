import React, { FC } from "react";
import { cn } from "../../../cn";

import "./Gallery.css";

const block = cn("gallery");

interface Props {
  images: string[];
  name: string;
}

export const Gallery: FC<Props> = ({ images, name }) => {
  return (
    <div className={block()}>
      {images.map((src, idx) => (
        <img
          key={src + idx}
          src={src}
          alt={name + idx}
          className={block("image", [`grid-${idx + 1}`])}
        />
      ))}
    </div>
  );
};
