import React, { FC, ReactNode, Children, useState, useMemo } from "react";
import { swap } from "../../util/swap";
import { cn } from "../../cn";

import "./Slider.css";

const block = cn("slider");

interface SliderProps {
  children: ReactNode;
}

export const Slider: FC<SliderProps> = ({ children }) => {
  const [slides, setSlides] = useState([0, 1, 2]);
  return (
    <div className={block()}>
      {useMemo(
        () =>
          Children.map(children, (node, idx) => (
            <div
              className={block("item", { layer: slides[idx] + 1 })}
              onClick={() =>
                setSlides(
                  swap(
                    slides,
                    idx,
                    slides.findIndex((val) => val === 0)
                  )
                )
              }
            >
              {node}
            </div>
          )),
        [slides]
      )}
    </div>
  );
};
