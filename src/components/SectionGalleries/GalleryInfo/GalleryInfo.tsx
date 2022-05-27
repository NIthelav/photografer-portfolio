import React, { FC } from "react";
import { cn } from "../../../cn";

import "./GalleryInfo.css";

const block = cn("gallery-info");

interface GalleryProps {
  slidersNum: number;
  active: number;
  setActive: (idx: number) => void;
}

export const GalleryInfo: FC<GalleryProps> = ({
  slidersNum,
  setActive,
  active,
}) => {
  return (
    <div className={block()}>
      <br className={block("line")} />
      <h1 className={block("title")}>Title</h1>
      <p className={block("text")}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A quasi quis
        sit porro obcaecati quas tempora, id ipsum, laboriosam possimus
        distinctio, quae natus itaque tempore magni dolorem fugiat? Reiciendis,
        neque.
      </p>
      <div className={block("slider-points")}>
        <div
          className={block("arrow", { left: true })}
          onClick={() => {
            setActive(active > 0 ? active - 1 : slidersNum - 1);
          }}
        />
        {new Array(slidersNum).fill(0).map((_, idx) => (
          <div
            key={idx}
            className={block("slider-point", { active: active === idx })}
            onClick={() => setActive(idx)}
          />
        ))}
        <div
          className={block("arrow", { right: true })}
          onClick={() => {
            setActive(active < slidersNum - 1 ? active + 1 : 0);
          }}
        />
      </div>
      <br className={block("line")} />
    </div>
  );
};
