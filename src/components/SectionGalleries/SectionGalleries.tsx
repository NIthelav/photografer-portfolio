import React, { useState } from "react";
import { cn } from "../../cn";
import { Gallery } from "./Gallery/Gallery";
import { GalleryInfo } from "./GalleryInfo/GalleryInfo";
import { Slider } from "../Slider/Slider";

import "./SectionGalleries.css";

const block = cn("section-galleries");

const galleries = [
  {
    name: "photo",
    images: [
      "img/photo/photo_1.jpg",
      "img/photo/photo_2.jpg",
      "img/photo/photo_3.jpg",
      "img/photo/photo_4.jpg",
      "img/photo/photo_5.jpg",
      "img/photo/photo_6.jpg",
      "img/photo/photo_7.jpg",
      "img/photo/photo_8.jpg",
      "img/photo/photo_9.jpg",
      "img/photo/photo_10.jpg",
      "img/photo/photo_11.jpg",
    ],
  },
  {
    name: "pony",
    images: [
      "img/pony/pony_1.jpg",
      "img/pony/pony_2.jpg",
      "img/pony/pony_3.jpg",
      "img/pony/pony_4.jpg",
      "img/pony/pony_5.jpg",
      "img/pony/pony_6.jpg",
      "img/pony/pony_7.jpg",
      "img/pony/pony_8.jpg",
      "img/pony/pony_9.jpg",
      "img/pony/pony_10.jpeg",
      "img/pony/pony_11.jpeg",
    ],
  },
  {
    name: "arts",
    images: [
      "img/arts/art_1.jpg",
      "img/arts/art_2.jpg",
      "img/arts/art_3.jpg",
      "img/arts/art_4.jpg",
      "img/arts/art_5.jpg",
      "img/arts/art_6.jpg",
      "img/arts/art_7.jpg",
      "img/arts/art_8.jpg",
      "img/arts/art_9.jpg",
      "img/arts/art_10.jpg",
      "img/arts/art_11.jpg",
    ],
  },
];

export const SectionGalleries = () => {
  const [active, setActive] = useState(0);
  return (
    <div className={block()}>
      <GalleryInfo
        slidersNum={galleries.length}
        setActive={setActive}
        active={active}
      />
      <Slider activeSlide={active} setActiveSlide={setActive}>
        {galleries.map((gallery, idx) => (
          <Gallery
            key={gallery.name + idx}
            name={gallery.name}
            images={gallery.images}
          />
        ))}
      </Slider>
    </div>
  );
};
