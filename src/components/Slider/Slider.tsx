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
  activeSlide?: number;
  setActiveSlide?: (idx: number) => void;
}

export const Slider: FC<SliderProps> = ({
  children,
  activeSlide,
  setActiveSlide,
}) => {
  const childArr = useMemo(() => Children.toArray(children), [children]);

  const [styles, setStyles] = useState(() =>
    childArr.map((_, idx) => ({
      zIndex: 100 - idx,
      transform: `translate(${1.5 * idx}vw, ${1.5 * idx}vw)`,
      __index: idx,
    }))
  );

  const swapSlides = useCallback(
    (idx: number) => {
      setStyles(
        swap(
          styles,
          idx,
          styles.findIndex(({ __index }) => __index === 0)
        )
      );
      if (setActiveSlide) setActiveSlide(idx);
    },
    [styles]
  );

  useEffect(() => {
    if (activeSlide !== undefined) swapSlides(activeSlide);
  }, [activeSlide]);

  return (
    <div className={block()}>
      {useMemo(
        () =>
          childArr.map((node, idx) => (
            <div
              key={idx + node.toString()}
              className={block("item", { active: idx === activeSlide })}
              style={styles[idx]}
              onClick={() => swapSlides(idx)}
            >
              {node}
            </div>
          )),
        [styles]
      )}
    </div>
  );
};
