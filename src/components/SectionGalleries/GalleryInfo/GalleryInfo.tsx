import React from "react";
import { cn } from "../../../cn";

import "./GalleryInfo.css";

const block = cn("gallery-info");

export const GalleryInfo = () => {
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
      <br className={block("line")} />
    </div>
  );
};
