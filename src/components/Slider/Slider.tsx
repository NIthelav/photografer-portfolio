import React, {
  FC,
  ReactNode,
  Children,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { swap } from "../../util/swap";
import { cn } from "../../cn";

import "./Slider.css";

const block = cn("slider");

interface SliderProps {
  children: ReactNode;
}

export const Slider: FC<SliderProps> = ({ children }) => {
  const childArr = useMemo(() => Children.toArray(children), [children]);

  const [slides, setSlides] = useState(childArr.map((_, idx) => idx));
  useEffect(() => setSlides(childArr.map((_, idx) => idx)), [childArr]);

  const styles = useMemo(
    () =>
      childArr.map((_, idx) => ({
        zIndex: 100 - idx,
        transform: `translate(${1.5 * idx}vw, ${1.5 * idx}vw)`,
      })),
    [childArr]
  );

  return (
    <div className={block()}>
      {useMemo(
        () =>
          childArr.map((node, idx) => (
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
