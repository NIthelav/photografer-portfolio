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
      {
        <div className={block("slider-points")}>
          {new Array(slidersNum).fill(0).map((_, idx) => (
            <div
              className={block("slider-point", { active: active === idx })}
              onClick={() => setActive(idx)}
            />
          ))}
        </div>
      }
      <br className={block("line")} />
    </div>
  );
};
